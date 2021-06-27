import { Router } from 'express';

import TechnologyController from '../controllers/TechnologyController';

const technologyRoutes = Router();
const technologyController = new TechnologyController();

technologyRoutes.get('/', technologyController.index);

export default technologyRoutes;
