const express = require('express');
const app = express();
const port = 5000;
const password = 'password';

const Vigenere = require('caesar-salad').Vigenere;

app.get('/encode/:password', (req, res) => {
    res.send(Vigenere.Cipher(password).crypt(req.params.password));
});

app.get('/decode/:password', (req, res) => {
    res.send(Vigenere.Decipher(password).crypt(req.params.password));
});

app.listen(port, () => {
    console.log('We are live on ' + port);
});