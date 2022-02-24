import express from 'express';
import verifyToken from './middleware/auth';
import adminRouter from './routes/admin.routes';
import fixturesRouter from './routes/fixtures.routes';
import teamsRouter from './routes/teams.routes';
import usersRouter from './routes/users.routes';
import swaggerUi = require('swagger-ui-express');
import fs = require('fs');


/* Swagger files start */
// const swaggerFile = (process.cwd()+"/src/swagger/swagger.json");
// const swaggerData = fs.readFileSync(swaggerFile, 'utf8');
// const customCss = fs.readFileSync((process.cwd()+"/src/swagger/swagger.css"), 'utf8');
// const swaggerDocument = JSON.parse(swaggerData);
/* Swagger files end */

const router = express.Router();


// router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, null, null, customCss));

router.use('/users', usersRouter);

router.use('/admin', adminRouter); 

//Protected routes
//JWT Authentication middleware
router.use(verifyToken);

router.use('/teams', teamsRouter);


router.use('/fixtures', fixturesRouter);


export default router;