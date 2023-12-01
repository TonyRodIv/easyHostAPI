const { DataTypes } = require("sequelize");

const database = require("../database/connection");

const acomodacao = database.define("acomodacao", {
  nome_acomodacao: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
  },
  nome_hospede: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
  },
  status_reserva: {
    type: DataTypes.INTEGER,
    allowNull: false,
    require: true,
  },
  data_entrada:{
    type: DataTypes.DATE,
    allowNull: false,
    require: true,
  },
  data_saida:{
    type: DataTypes.DATE,
    allowNull: false,
    require: true,
  }
});

module.exports = acomodacao;
