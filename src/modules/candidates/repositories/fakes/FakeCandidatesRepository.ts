import { uuid } from 'uuidv4';

import ICreateCandidateDTO from '@modules/candidates/dtos/ICreateCandidateDTO';
import IFindCandidatesByJobSpecDTO from '@modules/candidates/dtos/IFindCandidatesByJobSpecDTO';
import ICandidatesRepository from '../ICandidatesRepository';

import Candidate from '../../infra/typeorm/entities/Candidate';

class CandidatesRepository implements ICandidatesRepository {
  findByJobSpecification(
    data: IFindCandidatesByJobSpecDTO,
  ): Promise<Candidate[]> {
    throw new Error('Method not implemented.');
  }

  private candidates: Candidate[] = [];

  public async create({
    city,
    experience_id,
  }: ICreateCandidateDTO): Promise<Candidate> {
    const candidate = new Candidate();

    Object.assign(candidate, { id: uuid, city, experience_id });

    this.candidates.push(candidate);

    return candidate;
  }
}

export default CandidatesRepository;
