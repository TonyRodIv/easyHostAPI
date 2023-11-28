const { DataTypes } = require("sequelize");

const database = require("../database/connection");

const acomodacao = database.define("acomodacao", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
    unique: true,
  },
});

module.exports = acomodacao;
