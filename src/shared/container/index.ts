import { container } from 'tsyringe';

import IJobsRepository from '@modules/jobs/repositories/IJobsRepository';
import JobsRepository from '@modules/jobs/infra/typeorm/repositories/JobsRepository';

import ICandidatesRepository from '@modules/candidates/repositories/ICandidatesRepository';
import CandidatesRepository from '@modules/candidates/infra/typeorm/repositories/CandidatesRepository';

import ITechnologiesRepository from '@modules/technologies/repositories/ITechnologiesRepository';
import TechnologiesRepository from '@modules/technologies/infra/typeorm/repositories/TechnologiesRepository';

container.registerSingleton<IJobsRepository>('JobsRepository', JobsRepository);

container.registerSingleton<ICandidatesRepository>(
  'CandidatesRepository',
  CandidatesRepository,
);

container.registerSingleton<ITechnologiesRepository>(
  'TechnologiesRepository',
  TechnologiesRepository,
);
