import ICreateCandidateTechnologyDTO from '../dtos/ICreateCandidateTechnologyDTO';
import CandidateTechnology from '../infra/typeorm/entities/CandidateTechonlogy';

export default interface ICandidateTechnologyRepository {
  create(data: ICreateCandidateTechnologyDTO): Promise<CandidateTechnology>;
}
