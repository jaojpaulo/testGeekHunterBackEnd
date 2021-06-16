import AppError from '@shared/errors/AppError';

import FakeCandidatesRepository from '../repositories/fakes/FakeCandidatesRepository';
import CreateCandidateService from './CreateCandidateService';

let fakeCandidatesRepository: FakeCandidatesRepository;
let createCandidate: CreateCandidateService;

describe('CreateCandidate', () => {
  beforeEach(() => {
    fakeCandidatesRepository = new FakeCandidatesRepository();

    createCandidate = new CreateCandidateService(fakeCandidatesRepository);
  });

  it('should be able to create a new job', async () => {
    const candidate = await createCandidate.execute({
      city: 'São Paulo - SP',
      experience_id: '3d5e27fe-a556-4bfc-9745-ea4ce6f87d9d',
      technologies: ['React JS', 'React Native'],
    });

    expect(candidate).toHaveProperty('id');
    expect(candidate.city).toBe('São Paulo - SP');
  });
});
