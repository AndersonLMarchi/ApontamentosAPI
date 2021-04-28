import { User } from "../entities/Exports";
import {
  getUsers,
  createUser,
  IUserPayload,
  getUserById,
  getUserByName
} from "../repositories/UserRepository";

export default class UserController {

  public async getUsers(): Promise<Array<User>> {
    return getUsers();
  }

  public async createUser(body: IUserPayload): Promise<User> {
    return createUser(body);
  }

  public async getUserById(id: string): Promise<User | null> {
    return getUserById(id);
  }

  public async getUserByName(name: string): Promise<User | null> {
    return getUserByName(name);
  }

}
