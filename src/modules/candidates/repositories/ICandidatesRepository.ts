import Candidate from '../infra/typeorm/entities/Candidate';
import ICreateCandidateDTO from '../dtos/ICreateCandidateDTO';
import IFindCandidatesByJobSpec from '../dtos/IFindCandidatesByJobSpecDTO';

export default interface ICandidtesRepository {
  create(data: ICreateCandidateDTO): Promise<Candidate>;
  findByJobSpecification(data: IFindCandidatesByJobSpec): Promise<Candidate[]>;
}
