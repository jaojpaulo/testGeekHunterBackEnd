import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  ManyToMany,
  JoinColumn,
  JoinTable,
} from 'typeorm';

import Experience from '@modules/experience/infra/typeorm/entities/Experience';
import Technology from '@modules/technologies/infra/typeorm/entities/Technology';

@Entity('jobs')
class Job {
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

  @ManyToMany(() => Technology)
  @JoinTable({ name: 'jobs_technologies' })
  technologies: Technology[];
}

export default Job;
