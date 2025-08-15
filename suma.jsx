const express = require('express');
const app = express();
const PORT = 1002;

app.get('/', (req, res) => {
    const a = 10;
    const b = 20;
    const result = a + b;
    console.log(`Suma => ${a} + ${b} = ${result}`);
    res.send(`La suma de ${a} y ${b} es ${result}`);
});

app.listen(PORT, () => {
    console.log(`Servidor de suma en http://localhost:${PORT}`);
});
