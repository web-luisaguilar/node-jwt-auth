import express from 'express'
import morgan from 'morgan'
import pkg from '../package.json' assert { type: 'json' }
import productsRouter from './routes/products.routes.js'
import authRouter from './routes/auth.routes.js'
import userRouter from './routes/user.routes.js'
import cors from 'cors'
import { createRoles } from './libs/initialSetup.js'

const app = express()
createRoles() //crea los primeros roles por defecto
app.set('pkg', pkg)
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.json({
    name: app.get('pkg').name,
    author: app.get('pkg').author,
    description: app.get('pkg').description,
    version: app.get('pkg').version,
  })
})
app.use('/products', productsRouter)
app.use('/auth', authRouter)
app.use('/users', userRouter)

app.use((req, res) => {
  res.json({ status: 404, message: 'NotFound' })
})

export default app
