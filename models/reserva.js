const { DataTypes } = require("sequelize");

const database = require("../database/connection");

const reserva = database.define("reserva", {
  nome_acomodacao: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
  },
  nome_hospede:{
    type: DataTypes.STRING,
    allowNull:false,
    require:true,
  },
  status:{
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
  }
});

module.exports = reserva;
