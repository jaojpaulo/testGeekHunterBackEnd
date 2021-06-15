import { Router } from 'express';

import CandidatesController from '../controllers/CandidatesController';

const candidatesRoutes = Router();
const candidatesController = new CandidatesController();

candidatesRoutes.post('/', candidatesController.create);

export default candidatesRoutes;
