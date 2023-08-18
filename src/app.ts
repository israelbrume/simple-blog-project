const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const indexRoutes = require('./routes/index');
const { swaggerDocs, swaggerUi } = require('./swagger/swagger');



const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/api', indexRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
