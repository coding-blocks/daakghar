import express from 'express'
import config from './config'
import { apiRoute } from './routes/api'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', apiRoute)


export {
    app
}