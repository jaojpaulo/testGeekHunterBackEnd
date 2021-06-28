import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import CreateCandidateService from '@modules/candidates/services/CreateCandidateService';
import FilterCandidatesByJobSpecService from '@modules/candidates/services/FilterCandidatesByJobSpecService';

export default class CandidatesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { city, experience_id, technologies } = request.body;

    const createCandidate = container.resolve(CreateCandidateService);

    const candidate = await createCandidate.execute({
      city,
      experience_id,
      technologies,
    });

    return response.json(classToClass(candidate));
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const { city, experience_id, technologies } = request.query;

    const filterCandidate = container.resolve(FilterCandidatesByJobSpecService);

    const candidates = await filterCandidate.execute({
      city: String(city),
      experience_id: String(experience_id),
      technologies_list: String(technologies).split(','),
    });

    return response.json(candidates);
  }
}
