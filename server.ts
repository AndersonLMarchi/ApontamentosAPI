import express, { Application } from "express";
import { createConnection } from "typeorm";
import config from "./ormconfig";
import Router from "./src/routes";

const port = process.env.PORT || 3003;
const server = express();

server.use(express.json());
server.use(Router);

server.get('/', (req, res) => {
  res.send(`Verificar <a href="https://github.com/andersonlmarchi/ApontamentosAPI/blob/master/README.md">aqui</a> como usar essa API de Apontamentos!`);
});

createConnection(config).then((_connection) => {
    server.listen(port, function() {
        console.log("API conectada na porta", port, ".");
    });
  }).catch((err) => {
    console.log("Erro ao conectar ao banco de dados: ", err);
    process.exit(1);
  });

export default server;
