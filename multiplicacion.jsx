const express = require('express');
const app = express();
const PORT = 1004;

app.get('/', (req, res) => {
    const a = 10;
    const b = 20;
    const result = a * b;
    console.log(`Multiplicación => ${a} * ${b} = ${result}`);
    res.send(`La multiplicación de ${a} y ${b} es ${result}`);
});

app.listen(PORT, () => {
    console.log(`Servidor de multiplicación en http://localhost:${PORT}`);
});
