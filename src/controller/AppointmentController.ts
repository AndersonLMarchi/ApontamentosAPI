import { Appointments, User } from "../entities";
import {
  getAppointments,
  createAppointments,
  IAppointmentsPayload,
  getAppointmentsById,
  getAppointmentsByUser,
  updateAppointments,
  removeAppointment
} from "../repositories/AppointmentsRepository";

export default class AppointmentsController {

  public async getAppointments(): Promise<Array<Appointments>> {
    return getAppointments();
  }

  public async createAppointments(body: IAppointmentsPayload): Promise<Appointments> {
    return createAppointments(body);
  }

  public async updateAppointments(body: IAppointmentsPayload): Promise<Appointments> {
    return updateAppointments(body);
  }

  public async getAppointmentsById(id: string): Promise<Appointments | null> {
    return getAppointmentsById(id);
  }

  public async getAppointmentsByUser(user: User): Promise<Appointments | null> {
    return getAppointmentsByUser(user);
  }

  public async removeAppointment(id: string): Promise<Appointments | null> {
    return removeAppointment(id);
  }

}
