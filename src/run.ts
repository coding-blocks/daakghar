import { app } from "./server"
import config from "./config"
import { createConnection } from "typeorm"
import { Template } from "./db/entities/template"
import { Recipient } from "./db/entities/recipient"

async function startServer() {

    await createConnection({
        type: 'postgres',
        username: config.DB_USER,
        database: config.DB_NAME,
        password: config.DB_PASS,
        entities: [Template, Recipient],
        synchronize: true,
        // dropSchema: true, // FIXME: not for prod
        logger: config.TYPEORM_LOGGER,
        logging: config.TYPEORM_LOGGING
    })

    app.listen(config.PORT, () => {
        console.log(`Server started on http://localhost:${config.PORT}`)
    })

}

startServer()
