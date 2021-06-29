import { uuid } from 'uuidv4';

import ICreateCandidateTechnologyRepositorDTO from '@modules/candidates/dtos/ICreateCandidateTechnologyDTO';
import CandidateTechnology from '@modules/candidates/infra/typeorm/entities/CandidateTechonlogy';
import ICandidateTechnologyRepository from '../ICandidateTechnologyRepository';

class CandidateTechnologyRepository implements ICandidateTechnologyRepository {
  private canditateTechnologies: CandidateTechnology[] = [];

  public async create({
    candidate_id,
    technology_id,
    is_main_tech,
  }: ICreateCandidateTechnologyRepositorDTO): Promise<CandidateTechnology> {
    const candidateTechnology = new CandidateTechnology();

    Object.assign(candidateTechnology, {
      candidate_id,
      technology_id,
      is_main_tech,
    });

    this.canditateTechnologies.push(candidateTechnology);

    return candidateTechnology;
  }
}

export default CandidateTechnologyRepository;
