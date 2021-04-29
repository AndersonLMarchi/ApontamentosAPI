import { createConnection } from "typeorm";
import { Appointments, User } from "../entities";
import { Database } from "./Types";

export const connectDatabase = async (): Promise<Database> => {
  const connection = await createConnection();

  return {
    appointments: connection.getRepository(Appointments),
    users: connection.getRepository(User)
  };

};
