import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateJobService from '../../../../../services/CreateJobService';

export default class JobsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { city, experience, technologies } = request.body;

    const createJob = container.resolve(CreateJobService);

    const job = await createJob.execute({
      city,
      experience,
      technologies,
    });

    return response.json(job);
  }
}
