// @ts-ignore
import secrets from "../secrets.json";
import { LoggerOptions } from "typeorm/logger/LoggerOptions";
import { Logger } from "typeorm";
type TypeOrmLogger =
  | "debug"
  | "advanced-console"
  | "simple-console"
  | "file"
  | Logger
  | undefined;

const NODE_ENV = process.env.NODE_ENV;

const TYPEORM_LOGGER: TypeOrmLogger =
  NODE_ENV === "production" ? "advanced-console" : "debug";
const TYPEORM_LOGGING: LoggerOptions =
  NODE_ENV === "production" ? ["error"] : "all";

export = {
  TYPEORM_LOGGER,
  TYPEORM_LOGGING,
  PORT: process.env.PORT || 3113,
  DB_NAME: secrets.DB.NAME,
  DB_USER: secrets.DB.USER,
  DB_PASS: secrets.DB.PASS,
  API_SECRET: secrets.API_SECRET,
};
