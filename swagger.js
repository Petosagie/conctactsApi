const swaggerAutogen = require('swagger-autogen');

const doc = {
    info: {
        title: 'Contacts API',
        description: 'Contacts API'
    },
    host: 'localhost:8080',
    schemes: ['https']
};

const outputFile = './swagger.json';
const endpointFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointFiles, doc);