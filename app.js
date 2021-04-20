require('dotenv').config();
const express = require('express');
const app = express();

const port = process.env.PORT;


console.log(`Estamos en el puerto ${port}`);

app.get('/',  (req, res) => {

    res.send('Hello World');

});

app.listen(port);