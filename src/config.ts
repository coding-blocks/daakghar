// @ts-ignore
import secrets = require('../secrets-sample.json')
import { LoggerOptions } from 'typeorm/logger/LoggerOptions'
import { Logger } from 'typeorm'
type TypeOrmLogger = "debug" | "advanced-console" | "simple-console" | "file" | Logger | undefined

const NODE_ENV = process.env.NODE_ENV

const TYPEORM_LOGGER: TypeOrmLogger = (NODE_ENV === "production" ? undefined : "debug")
const TYPEORM_LOGGGING: LoggerOptions = (NODE_ENV === "production" ? ["error"] : "all")

export = {
    TYPEORM_LOGGER,
    TYPEORM_LOGGGING,
    PORT: process.env.PORT || 3113,
    DB_NAME: secrets.DB.NAME,
    DB_USER: secrets.DB.USER,
    DB_PASS: secrets.DB.PASS,
    API_SECRET: secrets.API_SECRET
}