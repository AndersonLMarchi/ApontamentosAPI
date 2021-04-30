import express from "express";
import AppointmentsController from "../controller/AppointmentController";

const router = express.Router();
const controller = new AppointmentsController();

router.get("/", async (req, res) => {
    let response = await controller.getAppointments();
    res.send(response);
});

router.get("/:id", async (req, res) => {
    let response = await controller.getAppointmentsById(req.params.id);
    if (!response) {
        res.status(404).send({ message: `Apontamento com o ID ${req.params.id} não encontrado!` });
    }
    res.send(response);
});

router.post("/", async (req, res) => {
    let response = await controller.createAppointments(req.body);
    res.send(response);
});

router.put("/", async (req, res) => {
    let response = await controller.updateAppointments(req.body);
    res.send(response);
});

router.delete("/:id", async (req, res) => {
    let response = await controller.removeAppointment(req.params.id);
    res.send(response);
});

export default router;
