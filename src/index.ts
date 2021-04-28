import 'reflect-metadata';

import { createConnection } from "typeorm";
import { ORMConfig } from "../ormconfig";

createConnection(ORMConfig as any);
