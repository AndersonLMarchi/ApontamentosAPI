//import 'reflect-metadata';

import express from 'express';
import path from 'path';
import * as bodyParser from 'body-parser';
import User from './src/types/User';
import { UserController } from './src/controller/UserController';

const port = process.env.PORT || 3003;
const server = express();
const defDir = path.join(path.resolve(), './src/view/');
enum fncts {
    ADDUSER = 'addUser', // add users
    ADDAPPT = 'addAppt'  // add appointments
};

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.get('/:folder/:file', (req, res) => {
    let page = '';
    if (req.params.folder && req.params.file) {
        page = path.join(defDir, req.params.folder, '/') + req.params.file + '.html';
    } else {
        page = defDir + 'index.html';
    }
    res.sendFile(page);
});

server.post('/:folder/:file', (req, res) => {
    if (req.params.file == fncts.ADDUSER) {
        let user = new User();
        user.name = req.body.user_name;
        user.birthday = req.body.user_birth;

        let controller = new UserController();
        res.send(controller.create(user));

    } else {

    }
});

server.get('/', (req, res) => {
    let page = defDir + 'index.html';
    res.sendFile(page);
});

server.listen(port, function() {
    console.log(`Listening running on port ${port}.`);
});

export default server;
