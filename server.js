const express = require("express");
const handlebars = require("express-handlebars");
const session = require("express-session");
const flash = require("express-flash");

const app = express();

const connection = require("./database/connection");

const reserva = require("./models/reserva");
const acomodacao = require("./models/acomodacao");

const authRouters = require("./routes/authRouters");

const hbs = handlebars.create({
  partialsDir: ["views/partials"],
  helpers: {
    /**
     * Este helper foi criado para converter os valores que estavam sendo emitidos
     * e exibi-los num formato JSON.
     */
    json: (context) => JSON.stringify(context, null, 2),
  },
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static("public"));

app.use(authRouters)


// {force: true}
connection
  .sync()
  .then(() => {
    app.listen(3333);
    console.log('Servidor rodando na porta 3333 ✅')
  })
  .catch((error) => console.error(error));
