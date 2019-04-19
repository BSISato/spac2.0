
var Medico = require('../app/models/medico');
var mongoose = require('mongoose');

//getAll
exports.get = async () => {
    const res = await Medico.find();
    return res;
}
//getById
exports.getById = async (id) => {

    const res = await Medico.findById(id);
    return res;
}
//PUT
exports.put = async (id, data) => {
    console.log(id);
    await Medico.findOneAndUpdate(id,
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
                crm: data.crm,
                especialidade: data.especialidade,
                valorConsulta: data.valorConsulta
            }
        });
}
//POST
exports.post = async (dados) => {
    var medico = new Medico(dados);
    await medico.save();
}
//DELETE
exports.delete = async (id) => {

    await Medico.deleteOne({ _id: id });
}
