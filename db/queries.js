const pool = require('./pool')

async function getAllMessages(){
  const {rows} = await pool.query(`SELECT * FROM messages`)
  return rows
}

async function createUser(first_name,last_name,username,password){
  await pool.query(`INSERT INTO users (first_name,last_name,username,password) VALUES ($1, $2, $3, $4)`,[first_name,last_name,username,password])
}

async function getUsername(username){
    const {rows} =await pool.query(`SELECT * FROM users WHERE username = $1`,[username])
    return rows[0]
}

async function addMessage(message_title, message, user_id){
  await pool.query(`INSERT INTO messages (message_title, message, user_id) VALUES ($1, $2, $3)`,[message_title, message, user_id])
}

module.exports ={
  getAllMessages,
    createUser,
    getUsername,
    addMessage
}