const express = require('express')
const mongoose = require('mongoose')
const path = require('path')

const app = express()
const PORT = 3000

// Setting the view engine to be EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
// Allowing app to parse json data
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send('Welcome to CampFindr')
})

app.listen(PORT, (req, res) => {
    console.log(`Server listening on port ${PORT}`)
})