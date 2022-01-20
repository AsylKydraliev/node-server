const express = require('express');
const app = express();
const port = 8000;

app.get('/:name', (req, res) => {
    res.send(`<h1>${req.params.name}</h1>`);
});

app.listen(port, () => {
    console.log('We are live on ' + port);
});