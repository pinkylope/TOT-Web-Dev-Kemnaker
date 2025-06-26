require('dotenv').config()
const express = require('express')
const mainRouter = require('./src/routes/main')
const app = express()
const port = 3000

app.use(express.json())
app.use("/api", mainRouter)


app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`)
})
