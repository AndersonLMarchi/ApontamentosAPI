import { Get, Post, Delete, Tags, Path, Put, Route, Body } from "tsoa";
import { Appointments } from "../entities";
import { getAppointments, createAppointments, IAppointmentsPayload, getAppointmentsById, getAppointmentsByUser, updateAppointments, removeAppointment } from "../repositories/AppointmentsRepository";

@Route("appointments")
@Tags("Appointment")
export default class AppointmentsController {

  @Get("/")
  public async getAppointments(): Promise<Array<Appointments>> {
    return getAppointments();
  }

  @Post("/")
  public async createAppointments(@Body() body: IAppointmentsPayload): Promise<Appointments> {
    return createAppointments(body);
  }

  @Put("/")
  public async updateAppointments(@Body() body: IAppointmentsPayload): Promise<Appointments> {
    return updateAppointments(body);
  }

  @Get("/:id")
  public async getAppointmentsById(@Path() id: string): Promise<Appointments | null> {
    return getAppointmentsById(id);
  }

  public async getAppointmentsByUser(id: string): Promise<Array<Appointments> | null> {
    return getAppointmentsByUser(id);
  }

  @Delete("/:id")
  public async removeAppointment(@Path() id: string): Promise<Appointments | boolean> {
    return removeAppointment(id);
  }

}
