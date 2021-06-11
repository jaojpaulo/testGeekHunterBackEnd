import { Router } from 'express';

import JobsController from '../controllers/JobsController';

const jobsRoutes = Router();
const jobsController = new JobsController();

jobsRoutes.post('/', jobsController.create);

export default jobsRoutes;
