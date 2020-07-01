import { Router } from "express";
import { getTemplateRepository } from "../../db/repositories";
import { ensureApiKey } from "../../middlewares/auth";
import { Template } from "../../db/entities/template";
import hbs from 'handlebars'
import { mediums } from "../../domain/mediums";
import { MediumType } from "../../domain/mediums/Medium";

const route = Router()

interface CreateTemplateParams {
    data: string
    medium: MediumType
}

route.get('/', async (req, res) => {
    const templates = await getTemplateRepository().find()

    res.status(200).json(templates)
})

route.post('/', ensureApiKey, async (req, res) => {
    const templateParams: CreateTemplateParams = req.body

    if (!mediums[templateParams.medium]) {
        return res.status(404).send({
            error: 'No such medium found'
        })
    }


    const placeholders = Array.from(templateParams.data.matchAll(/{{[{]?(.*?)[}]?}}/g)).map(it => it[1])
    const newTemplate = new Template()
    newTemplate.data = templateParams.data
    newTemplate.mediumType = templateParams.medium
    newTemplate.placeholders = placeholders

    const template = await getTemplateRepository().save(newTemplate)

    res.status(201).json(template)

})

route.get('/:id', async (req, res) => {
    const template = await getTemplateRepository().findOne(req.params.id)
    if (!template) {
        res.status(404).send({ error: 'No such template found' })
    }

    res.status(200).json(template)
})

interface TemplateRenderParams {
    data: { [x: string]: string }
}

route.post('/:id/render', async (req, res) => {
    const renderParams: TemplateRenderParams = req.body

    const template = await getTemplateRepository().findOne(req.params.id)
    if (!template) {
        return res.status(404).send({ error: 'No such template found' })
    }

    for (let placeholder of template.placeholders) {
        if (!renderParams.data[placeholder]) {
            return res.status(400).send({ error: `No data sent for placeholder = ${placeholder}` })
        }
    }

    try {
        const cookedString = hbs.compile(template.data)(renderParams.data)
        return res.status(200).json({
            template,
            rendered: cookedString
        })
    } catch (err) {
        return res.status(500).json({ error: err })
    }



})

export const apiTemplatesRoute = route