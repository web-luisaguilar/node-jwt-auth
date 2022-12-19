import app from './app.js'
import './database.js'
const port = process.env.port || 3000

app.listen(port, () =>
  console.log(`Server is ready up on: https://localhost:${port}`)
)
