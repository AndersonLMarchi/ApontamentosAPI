import { Body, Get, Post, Delete, Tags, Path, Put, Route } from "tsoa";
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
@Route("users")
@Tags("User")
export default class UserController {

  @Get("/")
  public async getUsers(): Promise<Array<User>> {
    return getUsers();
  }

  @Post("/")
  public async createUser(@Body() body: IUserPayload): Promise<User> {
    return createUser(body);
  }

  @Put("/")
  public async updateUser(@Body() body: IUserPayload): Promise<User> {
    return updateUser(body);
  }

  @Get("/:id")
  public async getUserById(@Path() id: string): Promise<User | null> {
    return getUserById(id);
  }

  public async getUserByName(name: string): Promise<User | null> {
    return getUserByName(name);
  }

  @Delete("/:id")
  public async removeUser(@Path() id: string): Promise<User | boolean> {
    return removeUser(id);
  }

}
