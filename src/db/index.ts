import { Sequelize } from 'sequelize';

const { DB_USER, DB_PASS, DB_NAME, DB_HOST } = process.env;

const sequelize = new Sequelize( 'sbproject', 'admin', 'Pa$$word',{
  host: 'sbproject.c1tio7oqkzjw.us-east-2.rds.amazonaws.com',
  dialect: 'mysql',
});

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});

export default sequelize;
