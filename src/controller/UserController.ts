import { User } from "../entities";
import {
  IUserPayload,
  getUsers,
  createUser,
  getUserById,
  getUserByName,
  removeUser,
  updateUser
} from "../repositories/UserRepository";

export default class UserController {

  public async getUsers(): Promise<Array<User>> {
    return getUsers();
  }

  public async createUser(body: IUserPayload): Promise<User> {
    return createUser(body);
  }

  public async updateUser(body: IUserPayload): Promise<User> {
    return updateUser(body);
  }

  public async getUserById(id: string): Promise<User | null> {
    return getUserById(id);
  }

  public async getUserByName(name: string): Promise<User | null> {
    return getUserByName(name);
  }

  public async removeUser(id: string): Promise<User | null> {
    return removeUser(id);
  }

}
