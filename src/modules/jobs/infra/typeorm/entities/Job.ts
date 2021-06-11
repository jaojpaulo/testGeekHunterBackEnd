import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  // ManyToOne,
} from 'typeorm';

// import Experience from './Experience';

@Entity('jobs')
class Job {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  city: string;

  /* @ManyToOne(() => Experience, experience => experience.jobs)
  experience: Experience;
  */

  @Column()
  experience: string;

  @Column()
  technologies: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Job;
