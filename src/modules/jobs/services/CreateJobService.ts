import { inject, injectable } from 'tsyringe';

import ITechnologiesRepository from '@modules/technologies/repositories/ITechnologiesRepository';
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

    @inject('TechnologiesRepository')
    private technologiesRepository: ITechnologiesRepository,
  ) {}

  public async execute({
    city,
    experience_id,
    technologies,
  }: IRequest): Promise<Job> {
    const technology_list = await this.technologiesRepository.findByIds(
      technologies,
    );

    const job = await this.jobsRepository.create({
      city,
      experience_id,
      technologies: technology_list,
    });

    return job;
  }
}

export default CreateJobService;
