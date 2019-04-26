var Secretaria = require("../app/models/secretaria");
var mongoose = require('mongoose');
var repository = require('../repositories/secretaria-repository');
const authService = require('../services/auth-service');

exports.getAll = async (req, res) => {
    try {
        var data = await repository.get();
        res.status(200).send({
            message: "Secretarias:",
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
    var id = req.params.secretariaId;

    try {
        var data = await repository.getById(id);
        res.status(200).send({
            message: "Secretaria:",
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
        const id = req.params.altSecretariaId;
        var data = await repository.put(id, req.body);
        res.status(200).send({
            message: "Secretaria atualizada com sucesso",
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
            uf: req.body.uf
        
        });
        res.status(201).send({
            message: "Secretaria cadastrada com sucesso"
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
        const id = req.params.delSecretariaId;
        await repository.delete(id);
        res.status(200).send({
            message: "Secretaria removida com sucesso!"
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: "Falha ao processar a requisição",
        });
    }
}
exports.authenticate = async(req, res, next) => {
    try {
        const secretaria = await repository.authenticate({
            email:req.body.email,
            senha:req.body.senha
        });
        //console.log(cliente);
        if(!secretaria){
            res.status(404).send({
                message: 'Usuário ou senha inválidos'
            });
            return;
        }

        const token = await authService.generateToken({
            id: secretaria.id,
            email: secretaria.email,
            nome: secretaria.nome
           // roles: cliente.roles???
        });
        res.status(201).send({
            token: token,
            data:{
                email:secretaria.email,
                nome:secretaria.nome
            }
        });

    } catch (error) {
        res.status(500).send({
            message: "Falha ao processar requisição"
        });
    }
}



