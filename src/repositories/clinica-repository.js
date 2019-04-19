
var Clinica = require('../app/models/clinica');
var mongoose = require('mongoose');

//getAll
exports.get = async () => {
    const res = await Clinica.find();
    return res;
}
//getById
exports.getById = async (id) => {

    const res = await Clinica.findById(id);
    return res;
}
//PUT
exports.put = async (id, data) => {
    //console.log(id);
    await Clinica.findOneAndUpdate(id,
        {
            $set: {
                nome: data.nome,
                cnpj: data.cnpj,
                descricao: data.descricao,
                email: data.email,
                telefone: data.telefone,
                logradouro: data.logradouro,
                numero: data.numero,
                complemento: data.complemento,
                bairro: data.bairro,
                cidade: data.cidade,
                uf: data.uf
                
            }
        });
}
//POST
exports.post = async (dados) => {
    var clinica = new Clinica(dados);
    await clinica.save();
}
//DELETE
exports.delete = async (id) => {

    await Clinica.deleteOne({ _id: id });
}
