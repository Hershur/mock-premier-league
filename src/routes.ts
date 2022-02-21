import express from 'express';
import verifyToken from './middleware/auth';
import adminRouter from './routes/admin.routes';
import fixturesRouter from './routes/fixtures.routes';
import teamsRouter from './routes/teams.routes';
import usersRouter from './routes/users.routes';

const router = express.Router();


router.use('/users', usersRouter);

router.use('/admin', adminRouter);

//Protected routes
//JWT Authentication middleware
router.use(verifyToken);

router.use('/teams', teamsRouter);


router.use('/fixtures', fixturesRouter);


export default router;
