import Experience from '../infra/typeorm/entities/Experience';

export default interface IJobsRepository {
  findAll(): Promise<Experience[]>;
}
