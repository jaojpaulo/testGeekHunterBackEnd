import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

import Experience from '@modules/experience/infra/typeorm/entities/Experience';
import CandidateTechnology from './CandidateTechonlogy';

@Entity('candidates')
class Candidate {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  city: string;

  @Column()
  experience_id: string;

  @ManyToOne(() => Experience)
  @JoinColumn({ name: 'experience_id' })
  experience: Experience;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(
    () => CandidateTechnology,
    candidateTechnology => candidateTechnology.candidate,
  )
  candidatesTechnologies: CandidateTechnology[];
}

export default Candidate;
