
const express = require('express');
const app = express();
const PORT = 1001;

app.use(express.urlencoded({ extended: true }));

app.get('/', (_req, res) => { //Donde aparece el apartado etc
  res.send(`
    <h1>Calculadora Actividad</h1>
    <form method="POST" action="/calcular">
      Los numeros son: 10 y 20 <br>
      <label>Operación:
        <select name="op">
          <option value="suma">Suma</option>
          <option value="resta">Resta</option>
          <option value="multiplicacion">Multiplicación</option>
          <option value="division">División</option>
        </select>
      </label><br/><br/>
      <button type="submit">Tocame</button>
    </form>
    <p>Operaciones LocalHost: 1002(suma), 1003(resta), 1004(multiplicación), 1005(división)</p>
  `);
});

app.post('/calcular', (req, res) => {
  const { a, b, op } = req.body; //op es para especificar unpuerto xq estoy trabajando en objetos
  const map = {
    suma: '1002',
    resta: '1003',
    multiplicacion: '1004',
    division: '1005'
  };
  const port = map[op] || '1002';
  // Rutas a las cuales quiero dirigir, seleeciiono e y me pasa el puerto y me lo recobe en el localHost
  res.redirect(`http://localhost:${port}/?a=${encodeURIComponent(a)}&b=${encodeURIComponent(b)}`);
});

app.listen(PORT, () => {
  console.log(`Login/menu en http://localhost:${PORT}`);
});
