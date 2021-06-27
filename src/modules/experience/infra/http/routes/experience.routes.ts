import { Router } from 'express';

import ExperienceController from '../controllers/ExperienceController';

const experienceRoutes = Router();
const experienceController = new ExperienceController();

experienceRoutes.get('/', experienceController.index);

export default experienceRoutes;
