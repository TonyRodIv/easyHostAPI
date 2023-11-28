const express = require("express");
const handlebars = require("express-handlebars");
const session = require("express-session");
const flash = require("express-flash");
const FileStore = require("session-file-store")(session);
const path = require("path");
const os = require("os");

// Inicializa o express
const app = express();

const connection = require("./database/connection");

// Import Models
const acomodacao = require("./models/acomodacao");

// Import Routers
const authRouters = require("./routes/authRouters");

// Configurando o handlebars
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

// Configurando o envio de dados
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Configurando a sessão do usuário
app.use(
  session({
    name: "session",
    secret: "SenhaForte",
    resave: false,
    saveUninitialized: false,
    store: new FileStore({
      logFn: () => {},
      path: path.join(os.tmpdir(), "session"),
    }),
    cookie: {
      secure: false,
      maxAge: 360000,
      expires: new Date(Date.now() + 360000),
      httpOnly: true,
    },
  })
);

// Mensagens
app.use(flash());

// Para usar arquivos estáticos
app.use(express.static("public"));

// Utilizando rotas
// app.use("/", authRouters);

app.get('/', (req, res) => {
  return res.render('home')
})

// Conexão com o banco de dados
connection
  .sync()
  .then(() => {
    app.listen(3333);
    console.log('Servidor rodando na porta 3333 ✅')
  })
  .catch((error) => console.error(error));