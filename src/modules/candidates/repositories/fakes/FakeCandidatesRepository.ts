import { uuid } from 'uuidv4';

import ICreateCandidateDTO from '@modules/candidates/dtos/ICreateCandidateDTO';
import ICandidtesRepository from '../ICandidatesRepository';

import Candidate from '../../infra/typeorm/entities/Candidate';

class CandidatesRepository implements ICandidtesRepository {
  private candidates: Candidate[] = [];

  public async create({
    city,
    experience_id,
    technologies,
  }: ICreateCandidateDTO): Promise<Candidate> {
    const candidate = new Candidate();

    Object.assign(candidate, { id: uuid, city, experience_id, technologies });

    this.candidates.push(candidate);

    return candidate;
  }
}

export default CandidatesRepository;
