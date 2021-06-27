import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import CandidateTechnology from '@modules/candidates/infra/typeorm/entities/CandidateTechonlogy';

@Entity('technologies')
class Technology {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  technology_name: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(
    () => CandidateTechnology,
    candidateTechnology => candidateTechnology.technology,
  )
  candidatesTechnologies: CandidateTechnology[];
}

export default Technology;
