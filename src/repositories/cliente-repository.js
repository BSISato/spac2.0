
var Cliente = require('../app/models/cliente');
var mongoose = require('mongoose');


//getAll
exports.get = async () => {
    const res = await Cliente.find();
    return res;
}
//getById
exports.getById = async (id) => {

    const res = await Cliente.findById(id);
    return res;
}
//PUT
exports.put = async (id, data) => {
    console.log(id);
    await Cliente.findOneAndUpdate(id,
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
                uf: data.uf,
                convenioMedico: data.convenioMedico
            }
        });
}
//POST
exports.post = async (data) => {
    var cliente = new Cliente(data);
    await cliente.save();
}
//DELETE
exports.delete = async (id) => {

    await Cliente.deleteOne({ _id: id });
}
