import { getRepository } from "typeorm";
import { Appointments, User } from "../entities";

export interface IAppointmentsPayload {
    id?: string;
    date: Date;
    iniTime: number;
    endTime: number;
    user: User;
}

const createUpdate = async (payload: IAppointmentsPayload): Promise<Appointments> => {
    let appointmentsRepository = getRepository(Appointments);
    let appointments = new Appointments();
    return await appointmentsRepository.save({
        ...appointments,
        ...payload
    });
};

export const getAppointments = async (): Promise<Array<Appointments>> => {
    let appointmentsRepository = getRepository(Appointments);
    return await appointmentsRepository.find();
};

export const createAppointments = async (payload: IAppointmentsPayload): Promise<Appointments> => {    
    return createUpdate(payload);
};

export const updateAppointments = async (payload: IAppointmentsPayload): Promise<Appointments> => {
    return createUpdate(payload);
};

export const getAppointmentsById = async (id: string): Promise<Appointments | null> => {
    let appointmentsRepository = getRepository(Appointments);
    let appointments = await appointmentsRepository.findOne({ id: id });
    return (!appointments) ? null : appointments;
};

export const getAppointmentsByUser = async (id: string): Promise<Array<Appointments> | null> => {
    let appointmentsRepository = getRepository(Appointments);
    let appoitmentsByUser = await appointmentsRepository.find({ 
            where: { 
                user: { 
                    id: id 
                } 
            }, 
            relations: ['user'] 
        });
    return appoitmentsByUser;
};

export const removeAppointment = async (id: string): Promise<Appointments | boolean> => {
  let appointmentsRepository = getRepository(Appointments);
  let deleted = await appointmentsRepository.delete({ id });
  return deleted.raw;
};
