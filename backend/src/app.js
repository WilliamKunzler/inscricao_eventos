import express from 'express'
import cors from 'cors'
import inscricoesRoutes from './routes/inscricoes.routes.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/inscricoes', inscricoesRoutes)

export default app
