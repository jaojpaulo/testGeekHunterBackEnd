import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import Experience from '@modules/experience/infra/typeorm/entities/Experience';

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

  @Column()
  technologies: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Candidate;
