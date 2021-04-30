import express from "express";
import UserRoutes from "./UserRoutes";
import AppointmentRoutes from "./AppointmentRoutes";

export const router = express.Router();

router.use("/users", UserRoutes);
router.use("/appointments", AppointmentRoutes);