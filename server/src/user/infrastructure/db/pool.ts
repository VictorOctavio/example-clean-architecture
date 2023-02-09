import { createPool } from "mysql2/promise";
import { DBHOST, DBUSER, DB, DBPASSWORD } from '../../../config';

export const pool = createPool({
   host: DBHOST,
   user: DBUSER,
   password: DBPASSWORD,
   database: DB
})