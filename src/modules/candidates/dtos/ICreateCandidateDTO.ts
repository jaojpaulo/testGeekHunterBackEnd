import CandidateTechnology from '../infra/typeorm/entities/CandidateTechonlogy';

export default interface ICreateCandidateDTO {
  id: string;
  city: string;
  experience_id: string;
  technology_list: CandidateTechnology[];
}
