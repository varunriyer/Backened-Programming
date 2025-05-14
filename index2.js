import express from 'express';

import myrouter from './usingrouter(revision).js'


import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swagger.js';

const app = express();
const port = 3000;
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// Your application routes go here...
app.use('/myrouter', myrouter);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});





