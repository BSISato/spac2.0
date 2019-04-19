import express from 'express';
import bodyParser from 'body-parser';
const app = express();
var mongoose = require('mongoose');


//PERSISTENCIA 
mongoose.connect('mongodb://localhost/bdCrud', { useNewUrlParser: true } );

//configuração do server para usar o body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//definindo a porta via arquivo de configuração
var port = process.env.port || 3001;

//ROTAS
var indexRoute = require("./src/routes/index-routes");
var productRoute = require("./src/routes/product-routes");
var userRoute = require("./src/routes/user-routes");

//vincular a aplicação (app) com o motor de rotas
app.use('/api',indexRoute);
//Rotas para produtos
app.use('/products',productRoute);

app.use('/user',userRoute);


app.listen(port, () => {
    console.log('Server up and running!!!');

});


