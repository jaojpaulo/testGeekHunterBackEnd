import { getRepository, Repository } from 'typeorm';

import IJobsRepository from '@modules/jobs/repositories/IJobsRepository';
import ICreateJobDTO from '@modules/jobs/dtos/ICreateJobDTO';

import Job from '../entities/Job';

class JobsRepository implements IJobsRepository {
  private ormRepository: Repository<Job>;

  constructor() {
    this.ormRepository = getRepository(Job);
  }

  public async create({
    city,
    experience_id,
    technologies,
  }: ICreateJobDTO): Promise<Job> {
    const job = this.ormRepository.create({
      city,
      experience_id,
      technologies: technologies.toString(),
    });

    await this.ormRepository.save(job);

    return job;
  }
}

export default JobsRepository;
