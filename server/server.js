require('dotenv').config()
const express = require('express')
const app = express()

const PORT = process.env.PORT || 5000
app.get('/', (req, res) => {
    res.send('Hello Word')
})


app.listen(PORT, () => {
    console.log(`server run on port ${PORT}`)
})