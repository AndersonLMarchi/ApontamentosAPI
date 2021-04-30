import express, { Application } from "express";
import { createConnection } from "typeorm";
import config from "./ormconfig";
import router from "./src/routes/index";

const port = process.env.PORT || 3003;
const server: Application = express();

server.use(express.json());
server.use(router);

createConnection(config).then((_connection) => {
    server.listen(port, function() {
        console.log("API conectada na porta", port, ".");
    });
  }).catch((err) => {
    console.log("Erro ao conectar ao banco de dados: ", err);
    process.exit(1);
  });

export default server;
