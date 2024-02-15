const express = require('express');
const app = express();
app.listen(3000, () => console.log('listen is started on port 3000 !'))

app.get('/', (req, res) => {
    res.send("this is respond from server")
})
module.exports = app;