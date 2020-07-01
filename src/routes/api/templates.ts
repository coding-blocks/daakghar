import { Router } from "express";
import { getTemplateRepository } from "../../db/repositories";
import { ensureApiKey } from "../../middlewares/auth";
import { Template, MissingPlaceholderException } from "../../db/entities/template";
import { mediums } from "../../domain/mediums";
import { MediumType } from "../../domain/mediums/Medium";

const route = Router()

interface CreateTemplateBody {
    data: string
    medium: MediumType
}

route.get('/', async (req, res) => {
    const templates = await getTemplateRepository().find()

    res.status(200).json(templates)
})

route.post('/', ensureApiKey, async (req, res) => {
    const templateParams: CreateTemplateBody = req.body

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

interface TemplateRenderBody {
    data: { [x: string]: string }
}

route.post('/:id/render', async (req, res) => {
    const renderParams: TemplateRenderBody = req.body

    const template = await getTemplateRepository().findOne(req.params.id)
    if (!template) {
        return res.status(404).send({ error: 'No such template found' })
    }

    try {
        const cookedString = template.render(renderParams.data)
        return res.status(200).send({
            template,
            rendered: cookedString
        })
    } catch (err) {
        if (err instanceof MissingPlaceholderException) {
            return res.status(400).json({ error: err.message })
        } else {
            return res.status(500).json({ error: err.message })
        }
    }


})

export const apiTemplatesRoute = route