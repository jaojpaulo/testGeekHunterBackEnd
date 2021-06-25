/* eslint-disable no-await-in-loop */
import { uuid } from 'uuidv4';
import { inject, injectable } from 'tsyringe';

import ICandidatesRepository from '../repositories/ICandidatesRepository';
import ICandidateTechnologyRepository from '../repositories/ICandidateTechnologyRepository';

import Candidate from '../infra/typeorm/entities/Candidate';

import CandidateTechnology from '../infra/typeorm/entities/CandidateTechonlogy';

interface IRequest {
  city: string;
  experience_id: string;
  technologies: {
    technology_id: string;
    is_main_tech: boolean;
  }[];
}

@injectable()
class CreateCandidateService {
  constructor(
    @inject('CandidatesRepository')
    private candidatesRepository: ICandidatesRepository,

    @inject('CandidateTechnologyRepository')
    private candidateTechnologyRepository: ICandidateTechnologyRepository,
  ) {}

  public async execute({
    city,
    experience_id,
    technologies,
  }: IRequest): Promise<Candidate> {
    let i: number;
    const candidate_id = uuid();
    const technology_list: CandidateTechnology[] = [];

    for (i = 0; i < technologies.length; i += 1) {
      technology_list.push(
        await this.candidateTechnologyRepository.create({
          candidate_id,
          technology_id: technologies[i].technology_id,
          is_main_tech: technologies[i].is_main_tech,
        }),
      );
    }

    const candidate = await this.candidatesRepository.create({
      id: candidate_id,
      city,
      experience_id,
      technology_list,
    });

    return candidate;
  }
}

export default CreateCandidateService;
