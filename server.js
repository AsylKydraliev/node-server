const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send('<h1>My page</h1>');
});

app.get('/Hello', (req, res) => {
    res.send('<h1>Hello</h1>');
});

app.listen(port);