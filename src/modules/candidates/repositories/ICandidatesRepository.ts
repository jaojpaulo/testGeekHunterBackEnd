import Candidate from '../infra/typeorm/entities/Candidate';
import ICreateCandidateDTO from '../dtos/ICreateCandidateDTO';

export default interface ICandidtesRepository {
  create(data: ICreateCandidateDTO): Promise<Candidate>;
}
