# :dolphin: Sistema de Login usando MySQL

## `1º` • Introdução:

:smile: Depois de muito tempo estudando sobre o [MySQL](https://www.mysql.com/), finalmente comecei a por em prática os meus conhecimentos com esse incrível banco de dados. Lembrando que eu aprendi apenas o básico do MySQL no Youtube, mais precisamente no canal [Curso em Vídeo](https://www.youtube.com/channel/UCrWvhVmt0Qac3HgsjQK62FQ), na playlist do [Curso de MySQL](https://www.youtube.com/watch?v=Ofktsne-utM&list=PLHz_AreHm4dkBs-795Dsgvau_ekxg8g1r).

:wink: Ainda estou melhorando mais meus conhecimento e espero que um dia já esteja experiente nessa tecnologia.

## `2º` • Estruturação:

:computer: Entrando na área do desenvolvimento, eu fiz uma API em [Express](https://expressjs.com/pt-br/) com sistema de login e registro de usuários, onde você poderá registrar o **Nome de Usuário**, **E-mail** e **Senha**, e para o login será necessário enviar o **E-mail** e **Senha** para acessar os dados cadastrados do usuário.

### :file_folder: Estrutura da Tabela de Usuários(`users`):
```sql
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL UNIQUE,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) DEFAULT CHARSET = utf8;
```

> Nessa tabela criei com o nome `users` e inseri os campos `id` que será a chave primária para cada registro, o `username` que será o nome do usuário, `email` que será o E-mail e o `password` que será a senha. Logo abaixo defini a `PRIMARY KEY` que será meu `id`, assim não deixando ter mais de 1 registro no nosso banco de dados.

> Terminando a parte dos dados da tabela, coloquei o `CHARSET` para a linguagem `UTF-8` representada como `utf8`, assim será permitido o armazenamento de dados com caracteres Unicode padrão.

### :floppy_disk: Modo de Inserção de Dados na Tabela:
```sql
INSERT INTO `users` VALUES (DEFAULT, "Username", "E-mail", "Senha");
```

> No exemplo acima fiz um registro na tabela na mesma ordem dos campos da tabela, o valor `DEFAULT` será o `id` de cada conta cadastrada que será adicionada automáticamente na hora do registro.

### :mag: Nodo de Pesquisa de Registros na Tabela:
```sql
SELECT * FROM `users`;
```

> Acima fiz uma pesquisa geral em todos os registros da tabela, onde o valor `*` significa "Todos", assim buscando todos os registros.

### :gear: Aquivo `.env`:

Abaixo está todas as chaves para configuração do servidor Express e conexão com o banco de dados.

```env
# SERVER SECRET KEYS

SERVER_PORT="8081"
SERVER_SESSION_SECRET="secret_key"

# DATABASE MYSQL SECRET KEYS

DATABASE_MYSQL_HOST="localhost"
DATABASE_MYSQL_DATABASE="mysql_login"
DATABASE_MYSQL_USER="root"
DATABASE_MYSQL_PASSWORD=""
```

### :electric_plug: Script de Execução:

Use o script de inicialização para iniciar o servidor Express abaixo:

```shell
$ npm run dev
```

## `3º` • Produção:

### :arrow_right: Rotas:

Ao iniciar o servidor, será gerado automáticamente um Dump de Backup dos dados registrados no banco de dados, usando o [mysqldump](https://www.npmjs.com/package/mysqldump), depois você poderá navegar entre as rotas abaixo usando os métodos `GET` e `POST`.

```js
{
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
  }
}
```

> Você pode usar o [Insomnia](https://insomnia.rest/download) para poder realizar a navegação usando os dois métodos listados acima.

## `4º` • Considerações Finais:

:thinking: Achei o MySQL um banco de dados muito bom, em relação ao estilo de modelo que pode criar relações entre os registro e seu meio de pesquisa entre as seleções.

## `5º` • Links:

- :moneybag:  [Patreon](https://patreon.com/TiaGoiNsaNy)
- :bird: [Twitter](https://twitter.com/TiaGoiNsaNy)
- :speech_balloon: Discord: `TiaGoiNsaNy#9903`

## `6º` • Menções Incríveis:

| [<img src="https://avatars.githubusercontent.com/u/8683378?v=4" width=115><br><sub>@gustavoguanabara</sub>](https://github.com/gustavoguanabara) | [<img src="https://avatars.githubusercontent.com/u/62999761?s=460&u=1a2c2557c68aeef26e6eb8fab98ff1ca32a7d259&v=4" width=115><br><sub>@TiaGoiNsaNy</sub>](https://github.com/TiaGoiNsaNy) |
| :---: |  :---: |
