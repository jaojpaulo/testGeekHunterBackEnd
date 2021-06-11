import Job from '../infra/typeorm/entities/Job';
import ICreateJobDTO from '../dtos/ICreateJobDTO';

export default interface IJobsRepository {
  create(data: ICreateJobDTO): Promise<Job>;
}
