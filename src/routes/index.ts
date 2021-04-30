import express from "express";
import UserRoutes from "./UserRoutes";
import AppointmentRoutes from "./AppointmentRoutes";

const router = express.Router();

router.use("/users", UserRoutes);
router.use("/appointments", AppointmentRoutes);

export default router;