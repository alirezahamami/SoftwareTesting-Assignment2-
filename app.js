const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send("this is respond from server")
})

app.get('/person/:name', (req, res) => {
    res.send(`Person: ${req.params.name}`)
})

app.get('/data', (req, res) => {
    res.json({"name":'Mick', "height":'176'})
})

app.get('/html', (req, res) => {
    // res.setHeader('Content-type','text/html')
    res.send(`<html>
    <body> 
    <h1>Hello</h1>
    </body>
    </html>`)
})


app.get('/information', (req, res) => res.send("this is information !"))

app.listen(3000, () => console.log('listen is started on port 3000 !'))

module.exports = app;