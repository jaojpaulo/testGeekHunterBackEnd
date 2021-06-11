import { Router } from 'express';

import candidatesRouter from '../../../../routes/candidate.routes';
import jobRouter from '../../../../modules/jobs/infra/http/routes/job.routes';

const routes = Router();

routes.use('/candidate', candidatesRouter);
routes.use('/job', jobRouter);

export default routes;
