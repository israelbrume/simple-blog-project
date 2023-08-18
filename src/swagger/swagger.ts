import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const swaggerOptions = {
    definition: {
    info: {
      title: 'Blog API',
      version: '1.0.0',
      description: 'API documentation for the Blog project',
    //   contact: {
    //     name: 'Your Name',
    //   },
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server',
      },
    ],
  },
  apis: ['./routes/*.ts'], // Path to the main app file
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

export { swaggerDocs, swaggerUi };
