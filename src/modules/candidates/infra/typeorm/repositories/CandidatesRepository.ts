import { getRepository, Repository } from 'typeorm';

import ICandidtesRepository from '@modules/candidates/repositories/ICandidatesRepository';
import ICreateCandidateDTO from '@modules/candidates/dtos/ICreateCandidateDTO';

import Candidate from '../entities/Candidate';

class CandidatesRpository implements ICandidtesRepository {
  private ormRepository: Repository<Candidate>;

  constructor() {
    this.ormRepository = getRepository(Candidate);
  }

  public async create({
    id,
    city,
    experience_id,
    technology_list,
  }: ICreateCandidateDTO): Promise<Candidate> {
    const candidate = this.ormRepository.create({
      id,
      city,
      experience_id,
      candidatesTechnologies: technology_list,
    });

    await this.ormRepository.save(candidate);

    return candidate;
  }
}

export default CandidatesRpository;
