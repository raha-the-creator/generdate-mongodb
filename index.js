const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.listen(4000, () => {
    console.log(`Server started at at ${4000}`)
})