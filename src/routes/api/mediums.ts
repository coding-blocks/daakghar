import { Router } from "express";
import { getMediumRepository } from "../../db/repositories";
import { Medium } from "../../db/entities/medium";
import { ensureApiKey } from "../../middlewares/auth";

const route = Router()

route.get('/', async (req, res) => {
    return res.json(await getMediumRepository().find())
})

route.post('/', ensureApiKey,  async (req, res) => {
    const mediumParams: Medium = req.body

    const medium = await getMediumRepository().save(mediumParams)

    return res.json(medium)

})

export const apiMediumsRoute = route