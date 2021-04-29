import { getRepository } from "typeorm";
import { Appointments, User } from "../entities";

export interface IAppointmentsPayload {
    id?: string;
    date: Date;
    iniTime: number;
    endTime: number;
    user: User;
}

const appointmentsRepository = getRepository(Appointments);

const createUpdate = async (payload: IAppointmentsPayload): Promise<Appointments> => {
    const appointmentsRepository = getRepository(Appointments);
    const appointments = new Appointments();
    return appointmentsRepository.save({
        ...appointments,
        ...payload
    });
};

export const getAppointments = async (): Promise<Array<Appointments>> => {
    return appointmentsRepository.find();
};

export const createAppointments = async (payload: IAppointmentsPayload): Promise<Appointments> => {    
    return createUpdate(payload);
};

export const updateAppointments = async (payload: IAppointmentsPayload): Promise<Appointments> => {
    return createUpdate(payload);
};

export const getAppointmentsById = async (id: string): Promise<Appointments | null> => {
    const appointments = await appointmentsRepository.findOne({ id: id });
    return (!appointments) ? null : appointments;
};

export const getAppointmentsByUser = async (user: User): Promise<Appointments | null> => {
    const appointments = await appointmentsRepository.findOne({ user: user });
    return (!appointments) ? null : appointments;
};

export const removeAppointment = async (id: string): Promise<Appointments | null> => {
    let user = getAppointmentsById(id)[0];
    if (user) return appointmentsRepository.remove(user)[0];
    return null;
};
