const express = require("express");
const app = express();
const port = 3000;
const path = require('path');
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'));
});

app.get('/product', (req, res) => {
    res.sendFile(path.join(__dirname, './views/product.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'));
});

app.get('/shoppingCart', (req, res) => {
    res.sendFile(path.join(__dirname, './views/shoppingCart.html'));
});



app.listen(port, () => {
    console.log('Servidor corriendo en puerto '+ port);
});
