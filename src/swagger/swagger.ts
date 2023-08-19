import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const swaggerOptions = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: 'Simple Blog API docs',
        version: '1.0.0',
        description: 'API documentation for the Blog project',
      },
      servers: [
        {
          url: 'http://localhost:3000',
          description: 'Development server',
        },
        {
          url: 'https://virtserver.swaggerhub.com/ISRAELBRUME06_1/blog/1.0.0',
          description: 'Production Server',
        }
      ],
  },
  apis: ['./routes/*.ts'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

export { swaggerDocs, swaggerUi };
