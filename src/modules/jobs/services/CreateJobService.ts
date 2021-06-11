import { inject, injectable } from 'tsyringe';
import IJobsRepository from '../modules/jobs/repositories/IJobsRepository';

import Job from '../modules/jobs/infra/typeorm/entities/Job';

interface IRequest {
  city: string;
  experience: string;
  technologies: string[];
}

@injectable()
class CreateJobService {
  constructor(
    @inject('JobsRepository')
    private jobsRepository: IJobsRepository,
  ) {}

  public async execute({
    city,
    experience,
    technologies,
  }: IRequest): Promise<Job> {
    const job = await this.jobsRepository.create({
      city,
      experience,
      technologies,
    });

    return job;
  }
}

export default CreateJobService;
