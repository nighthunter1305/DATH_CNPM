import mysql from 'mysql';
import { env } from '~/config/env';

export const connection = mysql.createConnection({
  host: "bbfud0hcllttcnsh5bwb-mysql.services.clever-cloud.com",
  user: "uo7bs6tqopnxm5a7",
  password: "LKg3ZxLnO5zxHqZg07rB",
  database: "bbfud0hcllttcnsh5bwb",
  port: 3306
});

export const connectToDB = async () => {
  await connection.connect();
};
