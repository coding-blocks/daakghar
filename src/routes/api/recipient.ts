import { Router } from "express";
import { mediums } from "../../domain/mediums";
import { getRecipientRepository } from "../../db/repositories";

const route = Router()

route.get('/', async (req, res) => {
    const repo = getRecipientRepository()

    const recipients = await repo.find()

    return res.status(200).json(recipients)
})


interface AddRecipientBodyOneauth {
    oneauthId: string
}
interface AddRecipientBodyNew {
    email?: string
    phno?: string
}
/**
 * Add a recipient
 */
route.post('/', async (req, res) => {
    if (!(req.body as AddRecipientBodyOneauth).oneauthId) {
        const params = (req.body as AddRecipientBodyNew)
        const repo = getRecipientRepository()

        const recipient = await repo.insert(params)

        return res.status(201).json(recipient)
    }
})

export const apiRecipientsRoute = route