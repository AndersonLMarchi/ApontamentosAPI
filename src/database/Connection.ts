import { Client, Pool } from 'pg';
import {} from 'dotenv';

// const Connection = new Client({
//     user: process.env.USER,
//     host: process.env.HOST,
//     database: process.env.DATABASE,
//     password: process.env.PASSWORD,
//     port: Number(process.env.PORT),
// });

// const connection = new Client({
//     connectionString: process.env.DATABASE_URL
// }).connect();

const connection = new Client({
    connectionString: process.env.DATABASE_URL
});

// const Connection = new Pool({
//     connectionString: process.env.DATABASE_URL
// }).connect();

export default connection;