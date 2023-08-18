import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const swaggerOptions = {
    definition: {
    info: {
      title: 'Blog API',
      version: '1.0.0',
      description: 'API documentation for the Blog project',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server',
      },
    ],
  },
  apis: ['../routes/index.ts', '../routes/postRoutes.ts', '../routes/userRoutes.ts'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

export { swaggerDocs, swaggerUi };
