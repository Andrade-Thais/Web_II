const db = require("./banco")

const Agendamentos = db.sequelize.define("agendamentos", { //Define o nome da tabela, no caso, agendamentos.
    nome: {
        type: db.Sequelize.STRING //Define o tipo de dado armazenado.
    },
    endereco: {
        type: db.Sequelize.STRING
    },
    bairro: {
        type: db.Sequelize.STRING
    },
    cep: {
        type: db.Sequelize.INTEGER
    }
})

Agendamentos.sync({force: true})

module.exports = Agendamentos