import { getRepository, Repository } from 'typeorm';

import ICandidateTechnologyRepository from '@modules/candidates/repositories/ICandidateTechnologyRepository';
import ICreateCandidateTechnologyRepositorDTO from '@modules/candidates/dtos/ICreateCandidateTechnologyDTO';

import CandidateTechnology from '../entities/CandidateTechonlogy';

class CandidateTechnologyRepository implements ICandidateTechnologyRepository {
  private ormRepository: Repository<CandidateTechnology>;

  constructor() {
    this.ormRepository = getRepository(CandidateTechnology);
  }

  public async create({
    candidate_id,
    technology_id,
    is_main_tech,
  }: ICreateCandidateTechnologyRepositorDTO): Promise<CandidateTechnology> {
    const candidateTechnology = this.ormRepository.create({
      candidate_id,
      technology_id,
      is_main_tech,
    });

    await this.ormRepository.save(candidateTechnology);

    return candidateTechnology;
  }
}

export default CandidateTechnologyRepository;
