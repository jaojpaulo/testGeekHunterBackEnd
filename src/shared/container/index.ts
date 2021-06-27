import { container } from 'tsyringe';

import IJobsRepository from '@modules/jobs/repositories/IJobsRepository';
import JobsRepository from '@modules/jobs/infra/typeorm/repositories/JobsRepository';

import ICandidatesRepository from '@modules/candidates/repositories/ICandidatesRepository';
import CandidatesRepository from '@modules/candidates/infra/typeorm/repositories/CandidatesRepository';

import ITechnologiesRepository from '@modules/technologies/repositories/ITechnologiesRepository';
import TechnologiesRepository from '@modules/technologies/infra/typeorm/repositories/TechnologiesRepository';

import ICandidateTechnologyRepository from '@modules/candidates/repositories/ICandidateTechnologyRepository';
import CandidateTechnologyRepository from '@modules/candidates/infra/typeorm/repositories/CandidateTechnologyRepository';

import IExperienceRepository from '@modules/experience/repositories/IExperienceRepository';
import ExperienceRepository from '@modules/experience/infra/typeorm/repositories/ExperienceRepository';

container.registerSingleton<IJobsRepository>('JobsRepository', JobsRepository);

container.registerSingleton<ICandidatesRepository>(
  'CandidatesRepository',
  CandidatesRepository,
);

container.registerSingleton<ITechnologiesRepository>(
  'TechnologiesRepository',
  TechnologiesRepository,
);

container.registerSingleton<ICandidateTechnologyRepository>(
  'CandidateTechnologyRepository',
  CandidateTechnologyRepository,
);

container.registerSingleton<IExperienceRepository>(
  'ExperienceRepository',
  ExperienceRepository,
);
