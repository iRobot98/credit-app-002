const express = require('express')
const app = express()
const fs = require("fs")
const favicon = require('serve-favicon')
const path = require('path')
const port = process.env.PORT || 3000

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

app.get('/*', express.static("views"));

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
