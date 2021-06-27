import { Router } from 'express';

import jobsRouter from '@modules/jobs/infra/http/routes/jobs.routes';
import candidatesRouter from '@modules/candidates/infra/http/routes/candidates.routes';
import experienceRouter from '@modules/experience/infra/http/routes/experience.routes';
import technologiesRouter from '@modules/technologies/infra/http/routes/technologies.routes';

const routes = Router();

routes.use('/jobs', jobsRouter);
routes.use('/candidates', candidatesRouter);
routes.use('/experience', experienceRouter);
routes.use('/technologies', technologiesRouter);

export default routes;
