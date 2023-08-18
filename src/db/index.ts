const { DB_USER, DB_PASS, DB_NAME, DB_HOST } = process.env;

// const mysql = require('mysql2/promise');

// const dbConnection = mysql.createPool({
	// host: DB_HOST,
	// user: DB_USER,
	// password: DB_PASS,
	// database: DB_NAME,
// });

// dbConnection.getConnection((err, connection) => {
//   if (err) {
//     console.error('Database connection failed:', err);
//   } else {
//     console.log('Database connection successful');
//     connection.release();
//   }
// });

// module.exports = dbConnection;

import mysql from 'mysql2/promise';

const dbConnection = async () => {
  try {
    const connection = await mysql.createConnection({
		host: DB_HOST,
		user: DB_USER,
		password: DB_PASS,
		database: DB_NAME,
    });

    console.log('Database connection successful');
    return connection;
  } catch (error: any) {
    console.error('Database connection failed:', error.message);
    throw error;
  }
};

export default dbConnection;

