import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import indexRoutes from './routes/index';
import { swaggerDocs, swaggerUi } from './swagger/swagger';



const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/api', indexRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
