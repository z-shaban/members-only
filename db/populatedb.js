require ('dotenv').config()
const {Client} = require('pg');

const SQL = `
DROP TABLE IF EXISTS messages;
DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users(
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
first_name TEXT,
last_name TEXT,
username TEXT UNIQUE,
password TEXT,
membership_status BOOLEAN DEFAULT FALSE
);

CREATE TABLE IF NOT EXISTS messages(
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
message_title TEXT,
message TEXT,
created_at TIMESTAMP DEFAULT NOW(),
user_id INTEGER,
FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE
)
`
async function main(){
    console.log('seeding')
    const client = new Client({
        connectionString : process.env.DB_URL
    });

    await client.connect();
    await client.query(SQL);
    await client.end();

    console.log('done')
}

main();