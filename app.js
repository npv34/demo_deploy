const express = require('express');
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')))
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

app.get('/', (req, res, next) => {
    res.end('<h1>Xin chao ban</h1>')
})

app.listen(port)
