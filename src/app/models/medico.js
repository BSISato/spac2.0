var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var medicoSchema = new Schema({
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

    crm: String,
    especialidade: String,
    valorConsulta: Number
    
});


module.exports = mongoose.model('Medico',medicoSchema);