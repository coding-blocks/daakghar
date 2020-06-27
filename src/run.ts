import { app } from "./server"
import config from "./config"
import { createConnection } from "typeorm"
import { Medium } from "./db/entities/medium"
import { Template } from "./db/entities/template"

async function startServer() {

    await createConnection({
        type: 'postgres',
        username: config.DB_USER,
        database: config.DB_NAME,
        password: config.DB_PASS,
        entities: [Medium, Template],
        synchronize: true,
        logger: config.TYPEORM_LOGGER,
        logging: config.TYPEORM_LOGGGING
    })

    app.listen(config.PORT, () => {
        console.log(`Server started on http://localhost:${config.PORT}`)
    })

}

startServer()
