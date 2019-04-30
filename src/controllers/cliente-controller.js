const Cliente = require("../app/models/cliente");
const mongoose = require('mongoose');
const repository = require('../repositories/cliente-repository');


exports.getAll = async (req, res) => {
    try {
        var data = await repository.get();
        res.status(200).send({
            message: "Clientes:",
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
    var id = req.params.clienteId;

    try {
        var data = await repository.getById(id);
        res.status(200).send({
            message: "Cliente:",
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
        const id = req.params.altClienteId;
        var data = await repository.put(id, req.body);
        res.status(200).send({
            message: "Cliente atualizado com sucesso",
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
        /*
        var errors=[];
        if (!req.body.email){
           errors.push({msgError:"E-mail Obrigatorio"});
        };

        if (!req.body.senha){
            errors.push({msgError:"Senha Obrigatorio"});
         };

         if (errors) {
            throw errors;
         };
         */
        await repository.post({
            nome: req.body.nome,
            dataNascimento: req.body.dataNascimento,
            email: req.body.email,
            senha: req.body.senha,
            telefone: req.body.telefone,
            celular: req.body.celular,
            logradouro: req.body.logradouro,
            numero: req.body.numero,
            complemento: req.body.complemento,
            bairro: req.body.bairro,
            cidade: req.body.cidade,
            uf: req.body.uf,
            convenioMedico: req.body.convenioMedico
        });
        
        res.status(201).send({
            message: "Cliente cadastrado com sucesso"
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: "Falha ao processar a requisição",
            //e,
        });
    }
}

exports.delete = async (req, res) => {
    try {
        const id = req.params.delClienteId;
        await repository.delete(id);
        res.status(200).send({
            message: "Cliente removido com sucesso!"
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: "Falha ao processar a requisição",
        });
    }
}




