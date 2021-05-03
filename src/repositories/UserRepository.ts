import { getRepository } from "typeorm";
import { User } from "../entities";

export interface IUserPayload {
    id?: string;
    name: string;
    birthday: Date;
}

const createUpdate = async (payload: IUserPayload): Promise<User> => {
    let userRepository = getRepository(User);
    let user = new User();
    return await userRepository.save({...user, ...payload});
};
export const getUsers = async (): Promise<Array<User>> => {
    let userRepository = getRepository(User);
    return await userRepository.find();
};

export const createUser = async (payload: IUserPayload): Promise<User> => {
    return createUpdate(payload);
};

export const updateUser = async (payload: IUserPayload): Promise<User> => {
    return createUpdate(payload);
};

export const getUserById = async (id: string): Promise<User | null> => {
    let userRepository = getRepository(User);
    let user = await userRepository.findOne({ id: id });
    return (!user) ? null : user;
};

export const getUserByName = async (name: string): Promise<User | null> => {
    let userRepository = getRepository(User);
    let user = await userRepository.findOne({ name: name });
    return (!user) ? null : user;
};

export const removeUser = async (id: string): Promise<User | boolean> => {
    let userRepository = getRepository(User);
    let deleted = await userRepository.delete({ id });
    return deleted.raw;
};
