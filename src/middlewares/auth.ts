import { NextFunction, Request, Response } from "express";
import config from "../config";

/**
 * This is a temporary auth middleware to restrict some APIs to
 * use the X-API-Key Header, in future we will make sure 
 * user has a oneauth token
 */
export function ensureApiKey(req: Request, res: Response, next: NextFunction) {
    if (req.header('x-api-key') === config.API_SECRET) {
        next()
    } else {
        return res.status(403).send({
            error: 'Not allowed without x-api-key'
        })
    }
}