import 'dotenv/config'
import express from 'express'
import {conection} from './database'
import cors from 'cors'
import routes from './routes'
import appConfig from './config/app'

const app = express()

conection()
    .then(() => console.log('Connected'))
    .catch((err) => console.log(err))

app.use(express.json())
app.use(cors())
app.use(routes)

const port = appConfig.app.port

app.listen(port, () => console.log('Service Product Started'))