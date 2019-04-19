var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var clienteSchema = new Schema({
    nome: String,
    dataNascimento: Date,
    email: String,
    senha: String,
    telefone: Number,
    celular: Number,
    logradouro: String,
    numero: Number,
    complemento: String,
    bairro: String,
    cidade: String,
    uf: String,

    convenioMedico: String
    
});


module.exports = mongoose.model('Cliente',clienteSchema);