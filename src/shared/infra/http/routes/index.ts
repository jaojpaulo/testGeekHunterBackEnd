import { Router } from 'express';

import jobsRouter from '@modules/jobs/infra/http/routes/jobs.routes';
// import candidatesRouter from '../../../../routes/candidate.routes';

const routes = Router();

routes.use('/jobs', jobsRouter);
// routes.use('/candidate', candidatesRouter);

export default routes;
