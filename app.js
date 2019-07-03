const express = require('express');
const app = express();

app.get('/makers/:nombre', (req, res) => {
    let name = req.params.nombre;
    name = name[0].toUpperCase() + name.slice(1);
    res.send(`<h1>Hola ${name}!</h1>`);
});

app.listen(3000, () => console.log('listening on port 3000'));
