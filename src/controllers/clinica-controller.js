var Clinica = require("../app/models/clinica");
var mongoose = require('mongoose');
var repository = require('../repositories/clinica-repository');

exports.getAll = async (req, res) => {
    try {
        var data = await repository.get();
        res.status(200).send({
            message: "Clinicas:",
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
    var id = req.params.clinicaId;

    try {
        var data = await repository.getById(id);
        res.status(200).send({
            message: "Clinica:",
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
        const id = req.params.altClinicaId;
        var data = await repository.put(id, req.body);
        res.status(200).send({
            message: "Clinica atualizada com sucesso",
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
            nome: req.body.nome,
            cnpj: req.body.cnpj,
            descricao: req.body.descricao,
            email: req.body.email,
            telefone: req.body.telefone,
            logradouro: req.body.logradouro,
            numero: req.body.numero,
            complemento: req.body.complemento,
            bairro: req.body.bairro,
            cidade: req.body.cidade,
            uf: req.body.uf
        
        });
        res.status(201).send({
            message: "Clinica cadastrada com sucesso"
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
        const id = req.params.delClinicaId;
        await repository.delete(id);
        res.status(200).send({
            message: "Clinica removida com sucesso!"
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: "Falha ao processar a requisição",
        });
    }
}



