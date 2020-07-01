import { getRepository } from "typeorm";
import { Template } from "./entities/template";
import { Recipient } from "./entities/recipient";
import { Message } from "./entities/message";

export const getTemplateRepository = () => getRepository(Template)
export const getRecipientRepository = () => getRepository(Recipient)
export const getMessageRepository = () => getRepository(Message)