import { Router } from 'express';

import JobsController from '../controllers/JobsController';

const jobRoutes = Router();
const jobsController = new JobsController();

jobRoutes.post('/', jobsController.create);

export default jobRoutes;
