import express from 'express';
import AppointmentsController from './src/controller/AppointmentController';
import UserController from './src/controller/UserController';

const port = process.env.PORT || 3003;
const server = express();
const router = express.Router();

enum Obj {
    user = 'user',
    appointments = 'appoitments'
}

router.get('/:object', async (req, res) => {
    let controller, response;
    switch (req.params.object) {
        case Obj.user:     
            controller = new UserController();
            response = await controller.getUsers();
        case Obj.appointments:
            controller = new AppointmentsController();
            response = await controller.getAppointments();            
        default:
            response = "Opção inválida!";
    }

    return res.send(response);
});

server.get('/:object/:column', (req, res) => {    

});

server.post('/:object', (req, res) => {
});

server.put('/:object/:id', (req, res) => {
});

server.delete('/:object/:id', (req, res) => {
});

server.get('/', (req, res) => {
    res.send('Api de Apontamentos 2.0');
});

server.listen(port, function() {
    console.log(`API conectada na porta ${port}.`);
});

export default server;
