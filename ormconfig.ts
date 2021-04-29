import 'dotenv';
import { ConnectionOptions } from 'typeorm';

const ORMConfig: ConnectionOptions = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  migrations: ['./src/migrations/**/*.ts'],
  entities: ['./src/entities/**/*.ts'],
  cli: {
    migrationsDir: './dist/src/migrations',
    entitiesDir: './dist/src/entities'
  },
  synchronize: false,
  dropSchema: false,
  logging: false,
};

export default ORMConfig;