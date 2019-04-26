var Consulta = require("../app/models/consulta");
var mongoose = require('mongoose');
var repository = require('../repositories/consulta-repository');

exports.getAll = async (req, res) => {
    try {
        var data = await repository.get();
        res.status(200).send({
            message: "Consultas:",
            data
        });
    } catch (error) {
        res.status(500).send({
            message: "Falha ao processar a requisição",
            erro: error
        })
    }
}

exports.getById = async (req, res) => {
    var id = req.params.consultaId;

    try {
        var data = await repository.getById(id);
        res.status(200).send({
            message: "Consulta:",
            data
        });
    } catch (error) {
        res.status(500).send({
            message: "Falha ao processar a requisição",
            erro: error
        })
    }
}

exports.put = async (req, res) => {
    try {
        const id = req.params.altConsultaId;
        var data = await repository.put(id, req.body);
        res.status(200).send({
            message: "Consulta atualizada com sucesso",
            dados: data
        });
    } catch (error) {
        res.status(500).send({
            message: "Falha ao processar a requisição",
            erro: error
        });
    }
}

exports.post = async (req, res) => {
    try {
        await repository.post({
            data: req.body.data,
            situacao: req.body.situacao,
            descricao: req.body.descricao,
            prontuario: req.body.prontuario,
            //sei não se isso esta certo heeeeeeeinnnnnnn
            idCliente: req.body.idCliente
        
        });
        res.status(201).send({
            message: "Consulta cadastrada com sucesso"
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: "Falha ao processar a requisição",
        });
    }
}

exports.delete = async (req, res) => {
    try {
        const id = req.params.delConsultaId;
        await repository.delete(id);
        res.status(200).send({
            message: "Consulta removida com sucesso!"
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: "Falha ao processar a requisição",
        });
    }
}



