import { getRepository } from "typeorm";
import { User } from "../entities/Exports";

export interface IUserPayload {
    name: string;
    birthday: Date;
}

export const getUsers = async (): Promise<Array<User>> => {
    const userRepository = getRepository(User);
    return userRepository.find();
};

export const createUser = async (payload: IUserPayload): Promise<User> => {
    const userRepository = getRepository(User);
    const user = new User();
    return userRepository.save({
        ...user,
        ...payload,
    });
};

export const getUserById = async (id: string): Promise<User | null> => {
    const userRepository = getRepository(User);
    const user = await userRepository.findOne({ id: id });
    return (!user) ? null : user;
};

export const getUserByName = async (name: string): Promise<User | null> => {
    const userRepository = getRepository(User);
    const user = await userRepository.findOne({ name: name });
    return (!user) ? null : user;
};
