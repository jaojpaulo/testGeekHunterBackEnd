import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateCandidateService from '@modules/candidates/services/CreateCandidateService';

export default class CandidatesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { city, experience, technologies } = request.body;

    const createCandidate = container.resolve(CreateCandidateService);

    const candidate = await createCandidate.execute({
      city,
      experience,
      technologies,
    });

    return response.json(candidate);
  }
}