import { Repository } from "typeorm";
import { Appointments, User } from "../entities";

export interface Database {
  appointments: Repository<Appointments>;
  users: Repository<User>;
}
