///inicie o servidor com o comando: node server.js

class App {
  constructor() {
    this.express = require("express");

    this.app = this.express();
  }

  init() {

    this.app.use(this.express.static("public")); //para servir arquivos estáticos

    this.app.set("view engine", "ejs"); //utilizando o metodo view engine fornecido pelo ejs

    this.render("index");

    this.ports(8080);
  }

  //renderiza a pagina
  render(pagina) {
    this.app.get("/", (req, res) => {
      res.render(pagina);
    });

  }

  //define a porta
  ports(port) {
    this.app.listen(port, (res, req) => {
      console.log(
        `Servidor rodando na porta ${port} link: http://localhost:8080/` 
      );
    });
  }
}

const app = new App();

//inicializa o servidor
app.init();
