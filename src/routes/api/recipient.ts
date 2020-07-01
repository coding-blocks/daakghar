import { Router } from "express";
import { mediums } from "../../domain/mediums";
import { getRecipientRepository } from "../../db/repositories";

const route = Router()

route.get('/', async (req, res) => {
    const repo = getRecipientRepository()

    const recipients = await repo.find()

    return res.status(200).json(recipients)
})


interface AddRecipientParamsOneauth {
    oneauthId: string
}
interface AddRecipientParamsNew {
    email?: string
    phno?: string
}
/**
 * Add a recipient
 */
route.post('/', async (req, res) => {
    if (!(req.body as AddRecipientParamsOneauth).oneauthId) {
        const params = (req.body as AddRecipientParamsNew)
        const repo = getRecipientRepository()

        const recipient = await repo.insert(params)

        return res.status(201).json(recipient)
    }
})

export const apiRecipientsRoute = route