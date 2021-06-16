import { inject, injectable } from 'tsyringe';

import IJobsRepository from '../repositories/IJobsRepository';

import Job from '../infra/typeorm/entities/Job';

interface IRequest {
  city: string;
  experience_id: string;
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
    experience_id,
    technologies,
  }: IRequest): Promise<Job> {
    const job = await this.jobsRepository.create({
      city,
      experience_id,
      technologies,
    });

    return job;
  }
}

export default CreateJobService;
