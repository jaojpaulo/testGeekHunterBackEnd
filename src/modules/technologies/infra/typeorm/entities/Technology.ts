import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import CandidateTechnology from '@modules/candidates/infra/typeorm/entities/CandidateTechonlogy';

@Entity('technologies')
class Technology {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  technology_name: string;

  @OneToMany(
    type => CandidateTechnology,
    candidateTechnology => candidateTechnology.technology,
  )
  candidatesTechnologies: CandidateTechnology[];
}

export default Technology;
