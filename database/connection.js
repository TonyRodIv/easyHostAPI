const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("db_easyhost", "tony", "R@dri8669tony", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});

module.exports = sequelize;
// const { Sequelize } = require("sequelize");

// const sequelize = new Sequelize("db_easyhost", "aluno_medio", "@lunoSenai23.", {
//   host: "localhost",
//   port: 3306,
//   dialect: "mysql",
// });

// module.exports = sequelize;
