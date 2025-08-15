const express = require('express');
const app = express();
const PORT = 1005;

app.get('/', (req, res) => {
    const a = 10;
    const b = 20;
    if (b === 0) return res.send('No se puede dividir por cero.');//para que sea correcta la division
    const result = a / b;
    console.log(`División => ${a} / ${b} = ${result}`);
    res.send(`La división de ${a} y ${b} es ${result}`);
});

app.listen(PORT, () => {
    console.log(`Servidor de división en http://localhost:${PORT}`);
});
