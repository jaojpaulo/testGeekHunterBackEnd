import IExperienceRepository from '@modules/experience/repositories/IExperienceRepository';
import { getRepository, Repository } from 'typeorm';
import Experience from '../entities/Experience';

class ExperienceRepository implements IExperienceRepository {
  private ormRepository: Repository<Experience>;

  constructor() {
    this.ormRepository = getRepository(Experience);
  }

  public async findAll(): Promise<Experience[]> {
    const experience_list = await this.ormRepository.find();

    return experience_list;
  }
}

export default ExperienceRepository;
