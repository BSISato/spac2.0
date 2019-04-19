
var Secretaria = require('../app/models/secretaria');
var mongoose = require('mongoose');

//getAll
exports.get = async () => {
    const res = await Secretaria.find();
    return res;
}
//getById
exports.getById = async (id) => {

    const res = await Secretaria.findById(id);
    return res;
}
//PUT
exports.put = async (id, data) => {
    //console.log(id);
    await Secretaria.findOneAndUpdate(id,
        {
            $set: {
                nome: data.nome,
                dataNascimento: data.dataNascimento,
                email: data.email,
                senha: data.senha,
                telefone: data.telefone,
                celular: data.celular,
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
    var secretaria = new Secretaria(dados);
    await secretaria.save();
}
//DELETE
exports.delete = async (id) => {

    await Secretaria.deleteOne({ _id: id });
}
