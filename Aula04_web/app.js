const bodyParser = require("body-parser")
const express = require("express")
const app = express()
const handlebars = require("express-handlebars").engine
const post = require("./models/post")

app.engine("handlebars", handlebars({defaultLayout: "main"}))
app.set("view engine", "handlebars")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.render("primeira_pagina")
})

app.post("/cadastrar", (req, res) => {
    post.create({
        nome: req.body.nome,
        endereco: req.body.endereco,
        bairro: req.body.bairro,
        cep: req.body.cep

    }).then(() => {
        console.log("Dados cadastrados com sucesso!")
        res.send("Cadastro realizado com sucesso!")
    }).catch((erro) => {
        console.log("Erro ao cadastrar: " + erro)
    })
})

app.listen(8081, () => {
    console.log("Servidor Ativo!")
})