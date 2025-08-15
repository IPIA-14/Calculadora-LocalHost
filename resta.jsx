const express = require('express');
const app = express();
const PORT = 1003;

app.get('/', (req, res) => {
    const a = 10;
    const b = 20;
    const result = a - b;
    console.log(`Resta => ${a} - ${b} = ${result}`);
    res.send(`La resta de ${a} y ${b} es ${result}`);
});

app.listen(PORT, () => {
    console.log(`Servidor de resta en http://localhost:${PORT}`);
});
