import { getRepository } from "typeorm";
import { Appointments, User } from "../entities/Exports";

export interface IAppointmentsPayload {
    date: Date;
    iniTime: number;
    endTime: number;
    user: User;
}

export const getAppointments = async (): Promise<Array<Appointments>> => {
    const appointmentsRepository = getRepository(Appointments);
    return appointmentsRepository.find();
};

export const createAppointments = async (payload: IAppointmentsPayload): Promise<Appointments> => {
    const appointmentsRepository = getRepository(Appointments);
    const appointments = new Appointments();
    return appointmentsRepository.save({
        ...appointments,
        ...payload,
    });
};

export const getAppointmentsById = async (id: string): Promise<Appointments | null> => {
    const appointmentsRepository = getRepository(Appointments);
    const appointments = await appointmentsRepository.findOne({ id: id });
    return (!appointments) ? null : appointments;
};

export const getAppointmentsByUser = async (user: User): Promise<Appointments | null> => {
    const appointmentsRepository = getRepository(Appointments);
    const appointments = await appointmentsRepository.findOne({ user: user });
    return (!appointments) ? null : appointments;
};
