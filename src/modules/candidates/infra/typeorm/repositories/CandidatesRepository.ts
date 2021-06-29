import { getRepository, Repository, getConnection } from 'typeorm';

import ICandidtesRepository from '@modules/candidates/repositories/ICandidatesRepository';
import ICreateCandidateDTO from '@modules/candidates/dtos/ICreateCandidateDTO';

import IFindCandidatesByJobSpec from '@modules/candidates/dtos/IFindCandidatesByJobSpecDTO';
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

  public async findByJobSpecification({
    city,
    experience_id,
    technologies_list,
  }: IFindCandidatesByJobSpec): Promise<Candidate[]> {
    const candidates_list = await this.ormRepository.query(
      `select distinct c.* 
      from 
        candidates c 
        join experience e
        on e.id = c.experience_id 
        join candidates_technologies ct 
        on ct.candidate_id = c.id
      where c.city = $1 and
        e.weight >= (select weight from experience where id=$2)
        and ct.technology_id = ANY($3) limit 5;`,
      [city, experience_id, technologies_list],
    );

    return candidates_list;
  }
}

export default CandidatesRpository;
