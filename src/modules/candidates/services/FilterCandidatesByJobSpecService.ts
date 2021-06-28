import { inject, injectable } from 'tsyringe';
import Candidate from '../infra/typeorm/entities/Candidate';
import ICandidatesRepository from '../repositories/ICandidatesRepository';

interface IRequest {
  city: string;
  experience_id: string;
  technologies_list: string[];
}

@injectable()
class FilterCandidatesByJobSpecService {
  constructor(
    @inject('CandidatesRepository')
    private candidatesRepository: ICandidatesRepository,
  ) {}

  public async execute({
    city,
    experience_id,
    technologies_list,
  }: IRequest): Promise<Candidate[]> {
    const candidates_list = this.candidatesRepository.findByJobSpecification({
      city,
      experience_id,
      technologies_list,
    });

    return candidates_list;
  }
}

export default FilterCandidatesByJobSpecService;
