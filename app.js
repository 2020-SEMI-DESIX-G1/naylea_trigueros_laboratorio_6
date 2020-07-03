const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

const Estudiantes = [
{
  nombre: "Naylea Trigueros",
  edad: 21,
},
{
  nombre:"Carlos Perez",
  edad: 25,
}

];

//interm
app.use(bodyParser.json());


app.get('/', (req, res)=> {
  res.json(Estudiantes);
});

app.get('/estudiantes/:indice',(req, res) => {
  res.json(Estudiantes[req.params.indice]);
});

app.post('/estudiantes/',(req,res) => {
  Estudiantes.push(req.body);
  res.json(req.body);
});

app.listen(port, ()=> console.log(`Example app listening at http://localhost:${port}`));