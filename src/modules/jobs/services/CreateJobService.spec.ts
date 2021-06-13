import AppError from '@shared/errors/AppError';

import FakeJobsRepository from '../repositories/fakes/FakeJobsRepository';
import CreateJobService from './CreateJobService';

let fakeJobsRepository: FakeJobsRepository;
let createJob: CreateJobService;

describe('CreateJob', () => {
  beforeEach(() => {
    fakeJobsRepository = new FakeJobsRepository();

    createJob = new CreateJobService(fakeJobsRepository);
  });

  it('should be able to create a new job', async () => {
    const job = await createJob.execute({
      city: 'São Paulo - SP',
      experience: '4-5 years',
      technologies: ['React JS', 'React Native'],
    });

    expect(job).toHaveProperty('id');
    expect(job.city).toBe('São Paulo - SP');
  });
});
