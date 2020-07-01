import { getRepository } from "typeorm";
import { Template } from "./entities/template";
import { Recipient } from "./entities/recipient";

export const getTemplateRepository = () => getRepository(Template)
export const getRecipientRepository = () => getRepository(Recipient)