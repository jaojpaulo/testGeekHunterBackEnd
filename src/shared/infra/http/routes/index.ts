import { Router } from 'express';

import jobRouter from '@modules/jobs/infra/http/routes/job.routes';
import candidatesRouter from '../../../../routes/candidate.routes';

const routes = Router();

routes.use('/candidate', candidatesRouter);
routes.use('/job', jobRouter);

export default routes;
