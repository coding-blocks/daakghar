import { getRepository } from "typeorm";
import { Medium } from "./entities/medium";
import { Template } from "./entities/template";

export const getMediumRepository = () => getRepository(Medium)
export const getTemplateRepository = () => getRepository(Template)