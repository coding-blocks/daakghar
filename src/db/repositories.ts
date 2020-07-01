import { getRepository } from "typeorm";
import { Template } from "./entities/template";

export const getTemplateRepository = () => getRepository(Template)