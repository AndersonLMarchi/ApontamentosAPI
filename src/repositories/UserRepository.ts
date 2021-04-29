import { getRepository } from "typeorm";
import { User } from "../entities";

export interface IUserPayload {
    id?: string;
    name: string;
    birthday: Date;
}

const userRepository = getRepository(User);

const createUpdate = async (payload: IUserPayload): Promise<User> => {
    const user = new User();
    return userRepository.save({
        ...user,
        ...payload
    });
};

export const getUsers = async (): Promise<Array<User>> => {
    return userRepository.find();
};

export const createUser = async (payload: IUserPayload): Promise<User> => {
    return createUpdate(payload);
};

export const updateUser = async (payload: IUserPayload): Promise<User> => {
    return createUpdate(payload);
};

export const getUserById = async (id: string): Promise<User | null> => {
    const user = await userRepository.findOne({ id: id });
    return (!user) ? null : user;
};

export const getUserByName = async (name: string): Promise<User | null> => {
    const user = await userRepository.findOne({ name: name });
    return (!user) ? null : user;
};

export const removeUser = async (id: string): Promise<User | null> => {
    let user = getUserById(id)[0];
    if (user) return userRepository.remove(user)[0];
    return null;
};
