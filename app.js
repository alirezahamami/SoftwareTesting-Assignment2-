const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send("this is respond from server")
    //Comment
})


app.get('/information', (req, res) => res.send("this is information !"))

app.listen(3000, () => console.log('listen is started on port 3000 !'))

module.exports = app;