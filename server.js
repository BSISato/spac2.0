import express from 'express';
import bodyParser from 'body-parser';
const app = express();
var mongoose = require('mongoose');

///const uri = "mongodb+srv://rozcovo:paçoquinha@cluster0-ox7rb.mongodb.net/bdSpac?retryWrites=true";
//const client = new MongoClient(uri, { useNewUrlParser: true });
///mongoose.connect(uri, { useNewUrlParser: true } );
//PERSISTENCIA 
mongoose.connect('mongodb://localhost/bdSpac', { useNewUrlParser: true } );

var config = require('./src/config')

//configuração do server para usar o body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// VERIFICAR ESSA CARALHA AQUI

app.use(function(req, res, next) {

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "*");
});

//definindo a porta via arquivo de configuração
var port = process.env.port || 3000;

//ROTAS
var indexRoute = require("./src/routes/index-routes");
var clienteRoute = require("./src/routes/cliente-routes");
var clinicaRoute = require("./src/routes/clinica-routes");
var consultaRoute = require("./src/routes/consulta-routes");
var medicoRoute = require("./src/routes/medico-routes");
var secretariaRoute = require("./src/routes/secretaria-routes");


//vincular a aplicação (app) com o motor de rotas
app.use('/api',indexRoute);
//Rotas para produtos

app.use('/cliente',clienteRoute);
app.use('/clinica',clinicaRoute);
app.use('/consulta',consultaRoute);
app.use('/medico',medicoRoute);
app.use('/secretaria',secretariaRoute);


app.listen(port, () => {
    console.log('Server up and running!!!');

});



