import AppError from '@shared/errors/AppError';

import FakeCandidatesRepository from '../repositories/fakes/FakeCandidatesRepository';
import FakeCandidateTechnologyRepository from '../repositories/fakes/FakeCandidateTechnologyRepository';
import CreateCandidateService from './CreateCandidateService';

let fakeCandidatesRepository: FakeCandidatesRepository;
let fakeCandidateTechnologyRepository: FakeCandidateTechnologyRepository;
let createCandidate: CreateCandidateService;

describe('CreateCandidate', () => {
  beforeEach(() => {
    fakeCandidatesRepository = new FakeCandidatesRepository();
    fakeCandidateTechnologyRepository = new FakeCandidateTechnologyRepository();

    createCandidate = new CreateCandidateService(
      fakeCandidatesRepository,
      fakeCandidateTechnologyRepository,
    );
  });

  it('should be able to create a new job', async () => {
    const candidate = await createCandidate.execute({
      city: 'São Paulo - SP',
      experience_id: '3d5e27fe-a556-4bfc-9745-ea4ce6f87d9d',
      technologies: [
        {
          technology_id: '578884e8-6ad8-4954-a6a3-40b7acc65f10',
          is_main_tech: true,
        },
        {
          technology_id: '24fb4e02-2a7b-4fe0-880d-51f2ac0a953b',
          is_main_tech: false,
        },
      ],
    });

    expect(candidate).toHaveProperty('id');
    expect(candidate.city).toBe('São Paulo - SP');
  });
});
