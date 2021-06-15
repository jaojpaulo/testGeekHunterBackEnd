import { Router } from 'express';

import jobsRouter from '@modules/jobs/infra/http/routes/jobs.routes';
import candidatesRouter from '@modules/candidates/infra/http/routes/candidates.routes';

const routes = Router();

routes.use('/jobs', jobsRouter);
routes.use('/candidates', candidatesRouter);

export default routes;
