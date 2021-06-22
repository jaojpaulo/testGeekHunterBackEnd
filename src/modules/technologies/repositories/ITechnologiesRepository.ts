import Technology from '../infra/typeorm/entities/Technology';

export default interface ITechnologiesRepository {
  findByIds(ids: string[]): Promise<Technology[]>;
}
