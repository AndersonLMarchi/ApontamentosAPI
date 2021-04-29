import express from 'express';
import UserController from '../controller/UserController';

const router = express.Router();
const controller = new UserController();

router.get('/', async (req, res) => {
    let response = await controller.getUsers();
    res.send(response);
});

router.get('/:id', async (req, res) => {
    let response = await controller.getUserById(req.params.id);
    if (!response) {
        res.status(404).send({ message: `Usuário com o ID ${req.params.id} não encontrado!` });
    }
    res.send(response);
});

router.post('/', async (req, res) => {
    let response = await controller.createUser(req.body);
    res.send(response);
});

router.put('/', async (req, res) => {
    let response = await controller.updateUser(req.body);
    res.send(response);
});

router.delete('/:id', async (req, res) => {
    let response = await controller.removeUser(req.params.id);
    res.send(response);
});

export default router;
