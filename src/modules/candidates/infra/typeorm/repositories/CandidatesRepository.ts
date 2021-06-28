import { getRepository, Repository, getConnection } from 'typeorm';

import ICandidtesRepository from '@modules/candidates/repositories/ICandidatesRepository';
import ICreateCandidateDTO from '@modules/candidates/dtos/ICreateCandidateDTO';

import IFindCandidatesByJobSpec from '@modules/candidates/dtos/IFindCandidatesByJobSpecDTO';
import Experience from '@modules/experience/infra/typeorm/entities/Experience';
import Candidate from '../entities/Candidate';
import CandidateTechnology from '../entities/CandidateTechonlogy';

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
    const candidates_list = await this.ormRepository
      .createQueryBuilder()
      .select('distinct c.*')
      .from(Candidate, 'c')
      .innerJoin(Experience, 'e', 'e.id = c.experience_id ')
      .innerJoin(CandidateTechnology, 'ct', 'ct.candidate_id = c.id')
      .where('c.city = :city', {
        city,
      })
      .andWhere(
        'e.weight >= (select weight from experience where id= :experience_id)',
        {
          experience_id,
        },
      )
      .limit(5)
      .getMany();
    /* .andWhere('ct.technology_id in (:technologies_list)', {
        // eslint-disable-next-line prettier/prettier
      technologies_list: technologies_list.toString().replace(',', "','"),
      }); */

    return candidates_list;
  }
}

export default CandidatesRpository;
