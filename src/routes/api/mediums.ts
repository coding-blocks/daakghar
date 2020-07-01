import { Router } from "express";
import { mediums } from "../../domain/mediums";

const route = Router()

route.get('/', async (req, res) => {
    return res.json(mediums)
})

export const apiMediumsRoute = route