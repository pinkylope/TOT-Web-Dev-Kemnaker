require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"))

var footballers = [
    {id: 3, name: "Mbappe"},
    {id: 5, name: "Haaland"},
    {id: 7, name: "C Ronaldo"},
    {id: 9, name: "Ronaldo Nazarion"},
    {id: 11, name: "Messi"}
]

const getFootballers = (req, res) => {
    let result = ""
    
    getFootballers.forEach((item, index)=>{
        result += `${index+1}.${item.name}`
    })
}

app.get('/', (req, res) => {
  res.send('Hello Dunia!')
})

app.get('/footballers', (req, res) => {
  //res.send('This is get of footballers!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


//module.exports = mainRouter
