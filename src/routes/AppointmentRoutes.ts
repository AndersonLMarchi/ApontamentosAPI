import express from "express";
import AppointmentsController from "../controller/AppointmentController";

const router = express.Router();
const controller = new AppointmentsController();

router.get("/", async (req, res) => {
    let response = await controller.getAppointments();
    res.json(response);
});

router.get("/:id", async (req, res) => {
    let response = await controller.getAppointmentsById(req.params.id);
    if (!response) {
        res.status(404).json({ message: `Apontamento com o ID ${req.params.id} não encontrado!` });
    }
    res.json(response);
});

router.get(':userId', async (req, res) => {
    let response = await controller.getAppointmentsByUser(req.params.userId);
    if (!response) {
        res.status(404).json({ message: `Não foram encontrados apontamentos para o Usuário com ID ${req.params.id}!` });
    }
    res.json(response);    
});

router.post("/", async (req, res) => {
    let response = await controller.createAppointments(req.body);
    res.json(response);
});

router.put("/", async (req, res) => {
    let response = await controller.updateAppointments(req.body);
    res.json(response);
});

router.delete("/:id", async (req, res) => {
    let response = await controller.removeAppointment(req.params.id);
    res.json(response);
});

export default router;
