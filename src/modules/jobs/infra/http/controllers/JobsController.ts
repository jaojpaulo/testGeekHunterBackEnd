import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateJobService from '@modules/jobs/services/CreateJobService';

export default class JobsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { city, experience_id, technologies } = request.body;

    const createJob = container.resolve(CreateJobService);

    const job = await createJob.execute({
      city,
      experience_id,
      technologies,
    });

    return response.json(job);
  }
}
