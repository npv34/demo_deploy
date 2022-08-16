const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res, next) => {
    res.end('oke')
})


app.listen(port)
