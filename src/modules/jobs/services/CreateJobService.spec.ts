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
      experience_id: 'eb0e52ce-69fb-4eb2-bfac-32c568e6fa53',
      technologies: ['React JS', 'React Native'],
    });

    expect(job).toHaveProperty('id');
    expect(job.city).toBe('São Paulo - SP');
  });
});
