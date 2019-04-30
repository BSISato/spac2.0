
var Consulta = require('../app/models/consulta');
var Cliente = require ('../app/models/cliente');
var mongoose = require('mongoose');

//getAll
exports.get = async () => {
    const res = await Consulta.find();
    return res;
   
}
//getById
//união de dois doc
exports.getById = async (id) => {

    const consulta = await Consulta.findById(id);
    const cliente = await Cliente.findById(consulta.idCliente);

    const resConsulta = ({
        consulta,
        cliente
    })
    return resConsulta;
    
}
//PUT
exports.put = async (id, data) => {
    //console.log(id);
    await Consulta.findOneAndUpdate(id,
        {
            $set: {
                data: data.data,
                situacao: data.situacao,
                descricao: data.descricao,
                prontuario: data.prontuario,
                idCliente: data.idCliente
                
            }
        });
}
//POST
exports.post = async (dados) => {
    var consulta = new Consulta(dados);
    await consulta.save();
}
//DELETE
exports.delete = async (id) => {

    await Consulta.deleteOne({ _id: id });
}
