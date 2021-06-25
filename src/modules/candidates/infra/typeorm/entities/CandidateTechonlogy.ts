import { Column, Entity, ManyToOne } from 'typeorm';
import { Exclude } from 'class-transformer';

import Technology from '@modules/technologies/infra/typeorm/entities/Technology';
import Candidate from './Candidate';

@Entity('candidates_technologies')
class CandidateTechnology {
  @Column()
  @Exclude()
  candidate_id: string;

  @Column()
  technology_id: string;

  @Column()
  is_main_tech: boolean;

  @ManyToOne(() => Candidate, candidate => candidate.candidatesTechnologies, {
    primary: true,
  })
  candidate: Candidate;

  @ManyToOne(
    () => Technology,
    technology => technology.candidatesTechnologies,
    { primary: true },
  )
  technology: Technology;
}

export default CandidateTechnology;
