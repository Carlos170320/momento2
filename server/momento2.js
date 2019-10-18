const express = require('express');
const mongoose = require('mongoose');
const app = express();
 
app.get('/', function (req, res) {
  res.json({
      'mensaje' : 'Bienvenido al API de NODEJS + MONGODB + ROBO 3T'
    })
});

app.get('/nombre/:id', function (req, res) {
    res.json({
        'data' : `Hola ${req.params.id}`
    })
});

app.get('/edad/:id', function (req, res) {
    res.json({
        'data' : `La edad es ${req.params.id}`
    })
});


mongoose.connect('mongodb://localhost:27017/momento2', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err, res) => {
    if(err) throw err;
    console.log("Conectado a la DB");
});

let port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor ONLINE en el puerto ${ port }`);
});