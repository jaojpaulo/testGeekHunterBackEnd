import { Router } from 'express';

import candidatesRouter from './candidate.routes';
import jobRouter from './job.routes';

const routes = Router();

routes.use('/candidate', candidatesRouter);
routes.use('/job', jobRouter);

export default routes;
