const client = require("../client");

async function createUser(body) {
  const { name, username, password } = body;
  try {
    const {
      rows: [users],
    } = await client.query(
      `
        INSERT INTO users(name, username, password)
        VALUES($1, $2, $3)
        RETURNING *;
      `,
      [name, username, password]
    );
    console.log("user created!");
    return users;
  } catch (error) {
    console.log("error creating user");
    throw error;
  }
}

async function getUserById(id) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
        SELECT * FROM users
        WHERE user_id = $1;
      `,
      [id]
    );
    return user;
  } catch (error) {
    throw error;
  }
}

async function logUserIn(body) {
  const { username, password } = body;
  try {
    const {
      rows: [user],
    } = await client.query(
      `
        SELECT * FROM users
        WHERE username = $1 AND password = $2;
      `,
      [username, password]
    );
    return user;
  } catch (error) {
    throw error;
  }
}

async function deleteUser(id) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
        DELETE FROM users
        WHERE user_id = $1
        RETURNING *;
      `,
      [id]
    );
    return user;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createUser,
  getUserById,
  logUserIn,
  deleteUser,
};
