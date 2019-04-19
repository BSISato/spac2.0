var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var secretariaSchema = new Schema({
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
    uf: String
    
});


module.exports = mongoose.model('Secretaria',secretariaSchema);