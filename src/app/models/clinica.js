var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var clinicaSchema = new Schema({
    nome: String,
    cnpj: String,
    descricao: String,
    email: String,
    telefone: Number,
    logradouro: String,
    numero: Number,
    complemento: String,
    bairro: String,
    cidade: String,
    uf: String
    
});


module.exports = mongoose.model('Clinica',clinicaSchema);