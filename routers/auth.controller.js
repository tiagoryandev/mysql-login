const express = require("express");
const mysql = require("../database/query").pool;
const router = express.Router();

router.get("/", (request, response) => {
    if (!request.session.login_user) {
        response.status(200).json({
            url_users: {
                router: "/users",
                method: "GET"
            },
            url_login: {
                router: "/login",
                method: "POST",
                body: {
                    email: "exemple@mail.com",
                    password: "123456"
                }
            },
            url_register: {
                router: "/register",
                method: "POST",
                body: {
                    username: "Seu Username",
                    email: "Seu Email",
                    password: "Sua Senha"
                }
            }
        });
    } else {
        const session = request.session.login_user;

        response.status(200).json(session);
    };
});

router.get("/users", (request, response) => {
    mysql.getConnection((error, database) => {
        database.query("SELECT * FROM users", (error, result) => {
            database.release();

            response.status(200).json(result);
        });
    });
});

router.post("/login", (request, response) => {
    const email = request.body.email;
    const password = request.body.password;

    if (email && password) {
        mysql.getConnection((err, database) => {
            database.query("SELECT * FROM users WHERE email = ? AND password = ?",
                [email, password], (error, result) => {
                    if (result.length > 0) {
                        database.release();

                        request.session.login_user = result[0];

                        response.status(200).json(result[0]);
                    } else {
                        database.release();
                        response.status(400).json({
                            message: "Conta não existente"
                        });
                    };
                });
        });
    } else {
        response.redirect("/");
    };
});

router.post("/register", (request, response) => {
    const username = request.body.username;
    const email = request.body.email;
    const password = request.body.password;

    if (username && email && password) {
        mysql.getConnection((err, database) => {
            database.query("INSERT INTO users VALUE (DEFAULT, ?, ?, ?)",
                [username, email, password], (error, result) => {
                    if (error) {
                        response.status(409).json({
                            message: "Ocorreu um erro ao registrar a conta"
                        });
                    } else {
                        response.status(200).json({
                            message: "Conta registrada com sucesso"
                        });
                    };
                });
            database.release();
        });
    } else {
        response.redirect("/");
    };
});

module.exports = router;