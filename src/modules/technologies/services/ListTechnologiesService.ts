import { injectable, inject } from 'tsyringe';

import ITechnologiesRepository from '../repositories/ITechnologiesRepository';
import Technology from '../infra/typeorm/entities/Technology';

@injectable()
class ListTechnologiesService {
  constructor(
    @inject('TechnologiesRepository')
    private technologiesRepository: ITechnologiesRepository,
  ) {}

  public async execute(): Promise<Technology[]> {
    const technologiesList = this.technologiesRepository.findAll();

    return technologiesList;
  }
}

export default ListTechnologiesService;
