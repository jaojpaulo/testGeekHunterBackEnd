import { injectable, inject } from 'tsyringe';

import IExperienceRepository from '../repositories/IExperienceRepository';
import Experience from '../infra/typeorm/entities/Experience';

@injectable()
class ListExperienceService {
  constructor(
    @inject('ExperienceRepository')
    private experienceRepository: IExperienceRepository,
  ) {}

  public async execute(): Promise<Experience[]> {
    const experience_list = this.experienceRepository.findAll();

    return experience_list;
  }
}

export default ListExperienceService;
