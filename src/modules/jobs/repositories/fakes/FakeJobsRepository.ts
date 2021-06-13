import { uuid } from 'uuidv4';

import ICreateJobDTO from '@modules/jobs/dtos/ICreateJobDTO';
import IJobsRepository from '../IJobsRepository';

import Job from '../../infra/typeorm/entities/Job';

class JobsRepository implements IJobsRepository {
  private jobs: Job[] = [];

  public async create({
    city,
    experience,
    technologies,
  }: ICreateJobDTO): Promise<Job> {
    const job = new Job();

    Object.assign(job, { id: uuid, city, experience, technologies });

    this.jobs.push(job);

    return job;
  }
}

export default JobsRepository;
