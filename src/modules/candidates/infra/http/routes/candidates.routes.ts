import { Router } from 'express';

import CandidatesController from '../controllers/CandidatesController';

const candidatesRoutes = Router();
const candidatesController = new CandidatesController();

candidatesRoutes.post('/', candidatesController.create);

candidatesRoutes.get('/filter', candidatesController.index);

export default candidatesRoutes;
