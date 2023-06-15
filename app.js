require("./src/process.handlers")
const express = require('express')
const app = express()
const fs = require("fs")
const favicon = require('serve-favicon')
const path = require('path')
const port = process.env.PORT ? process.env.PORT : 5000


app.use(require("./src"))
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

app.get('/*', express.static("views/build"));
app.get("/", (req, res) => {
    res.type("html");
    res.send(fs.readFileSync("./views/build/index.html"))
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
