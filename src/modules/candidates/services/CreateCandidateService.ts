import { inject, injectable } from 'tsyringe';

import ICandidatesRepository from '../repositories/ICandidatesRepository';

import Candidate from '../infra/typeorm/entities/Candidate';

interface IRequest {
  city: string;
  experience_id: string;
  technologies: string[];
}

@injectable()
class CreateCandidateService {
  constructor(
    @inject('CandidatesRepository')
    private candidatesRepository: ICandidatesRepository,
  ) {}

  public async execute({
    city,
    experience_id,
    technologies,
  }: IRequest): Promise<Candidate> {
    const candidate = await this.candidatesRepository.create({
      city,
      experience_id,
      technologies,
    });

    return candidate;
  }
}

export default CreateCandidateService;
