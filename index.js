const express = require('express')
const bodyParser = require('body-parser')
const mongodb = require("./db/db")

const app = express();

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json({ message: "Test Success" })
})

require("./route/product.route")(app)
require("./route/category.route") (app)


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server is working on port : ${PORT}`)
})


