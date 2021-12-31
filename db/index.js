import pg from "pg";

import * as config from "../config.js";

/*const pool = new pg.Pool({
  host:"ec2-54-170-163-224.eu-west-1.compute.amazonaws.com" ,
  database: 'd1j9tfi47676p7',
  user: 'anyxgppaucsxyz',
  port: '5432',
  password: '2db4aad1ef98cb4b9a328fd3f5e967df7d4e86d723be8f2588084d77ac6fb47c',
  ssl: { rejectUnauthorized: false }, // Secure Sockets Layer
});
*/
const pool = new pg.Pool({
    host: config.databaseHost,
    database: config.databaseName,
    user: config.username,
    port: config.dbPort,
    password: config.password,
    ssl: { rejectUnauthorized: false }, // Secure Sockets Layer
  });


export default function query(text, params) {
  // return a promised that need to await

  // exposing.pool.query method  so we can use it else where
  return pool.query(text, params);
  //returns a promise unless we are using a callback (and we are not!!)
}

