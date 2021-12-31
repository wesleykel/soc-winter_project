import query from "../index.js";

const sqlString  = `CREATE TABLE IF NOT EXISTS burgers (id SERIAL PRIMARY KEY, name TEXT, burgerName TEXT, ingredients TEXT[], price NUMERIC)`

async  function  createBurgersTable(){

const res = await query(sqlString)
console.log("Created table", res)

}

createBurgersTable()