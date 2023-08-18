import { Connection } from 'mysql2/promise';

const createUserTable = async (connection: Connection) => {
  await connection.query(`
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      email VARCHAR(255) NOT NULL,
      password VARCHAR(255) NOT NULL
    )
  `);
};

export { createUserTable };
