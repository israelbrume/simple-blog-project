import { Connection } from 'mysql2/promise';

const createPostTable = async (connection: Connection) => {
  await connection.query(`
    CREATE TABLE IF NOT EXISTS posts (
      id INT AUTO_INCREMENT PRIMARY KEY,
      userId INT NOT NULL,
      title VARCHAR(255) NOT NULL,
      content TEXT NOT NULL,
      FOREIGN KEY (userId) REFERENCES users(id)
    )
  `);
};

export { createPostTable };
