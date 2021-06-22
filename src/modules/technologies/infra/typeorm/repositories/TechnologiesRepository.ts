import ITechnologiesRepository from '@modules/technologies/repositories/ITechnologiesRepository';
import { getRepository, Repository } from 'typeorm';
import Technology from '../entities/Technology';

class TechnologiesRepository implements ITechnologiesRepository {
  private ormRepository: Repository<Technology>;

  constructor() {
    this.ormRepository = getRepository(Technology);
  }

  public async findByIds(ids: string[]): Promise<Technology[]> {
    const technologies = await this.ormRepository.findByIds(ids);

    return technologies;
  }
}

export default TechnologiesRepository;
