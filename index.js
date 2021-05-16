require("dotenv").config();
require("./database/dump")();

const colors = require("colors");
const express = require("express");
const session = require("express-session");

const app = express();
const port = process.env.SERVER_PORT || 8081;

app.use(session({
    secret: process.env.SERVER_SESSION_SECRET,
    cookie: {
        maxAge: 604800000,
    },
    resave: true,
    saveUninitialized: false
}));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(require("./routers/auth.controller"));

app.listen(port, () => console.log(colors.yellow("[SERVER] - Servidor Iniciado com Sucesso;")));