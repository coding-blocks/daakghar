import { Router, Send } from "express";
import { mediums } from "../../domain/mediums";
import { transports } from "../../domain/transports";
import { MediumType } from "../../domain/mediums/Medium";
import { Transport } from "../../domain/transports/Transport";
import { getTemplateRepository, getMessageRepository } from "../../db/repositories";
import { Template } from "handlebars";
import { MissingPlaceholderException } from "../../db/entities/template";

const route = Router()

interface SendMessageBody {
    templateId: number
    recipientId: number
    templateParams: {[x: string]: string}
    transport: string 
    medium: MediumType
}
/**
 * Send a new message
 */
route.post('/', async (req, res) => {
    const body = req.body as SendMessageBody

    const transport: Transport = transports[body.medium]?.[body.transport]
    if (!transport) {
        return res.status(404).send({
            error: `transport: ${body.transport} not available for medium: ${body.medium}`
        })
    }

    const template = await getTemplateRepository().findOne(body.templateId ?? -1)
    if (!template) {
        return res.status(404).send({
            error: `No template with id = ${body.templateId} found`
        })
    }

    try {
        const messageBody = template.render(body.templateParams)
        

        const message = await getMessageRepository().insert({
            mediumType: body.medium,
            recipient: () => body.recipientId.toString(),
            template: () => body.templateId.toString(),
            templateData: body.templateParams
        })

        transport.send(messageBody, body.recipientId)
        return res.status(201).send({
            message
        })

    } catch (err) {
        if (err instanceof MissingPlaceholderException) {
            return res.status(400).json({ error: err.message })
        } else {
            return res.status(500).json({ error: err.message })
        }
    }



})


export const apiMessagesRoute = route