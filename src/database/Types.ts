import { Repository } from "typeorm";
import { Appointments, User } from "../entities/Exports";

export interface Database {
  appointments: Repository<Appointments>;
  users: Repository<User>;
}
