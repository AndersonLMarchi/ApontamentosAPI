import 'reflect-metadata';
import express, { Application } from 'express';
import router from "./src/routes";
import { createConnection } from 'typeorm';
import ORMConfig from './ormconfig';

const port = process.env.PORT || 3003;
const server: Application = express();

server.use(express.json());
server.use(router);


createConnection(ORMConfig)
  .then((_connection) => {
    server.listen(port, function() {
        console.log(`API conectada na porta ${port}.`);
    });
  })
  .catch((err) => {
    console.log("Unable to connect to db", err);
    process.exit(1);
  });

export default server;
