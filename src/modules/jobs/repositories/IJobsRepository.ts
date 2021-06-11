import ICreateJobDTO from '@modules/jobs/dtos/ICreateJobDTO';
import Job from '@modules/jobs/infra/typeorm/entities/Job';

export default interface IJobsRepository {
  create(data: ICreateJobDTO): Promise<Job>;
}
