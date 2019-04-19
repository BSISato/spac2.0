var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var consultaSchema = new Schema({
    data: Date,
    situacao: String,
    descricao: String,
    prontuario: String,
    idCliente: String
    
});


module.exports = mongoose.model('Consulta',consultaSchema);