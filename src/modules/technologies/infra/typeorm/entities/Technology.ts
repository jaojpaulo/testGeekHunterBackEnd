import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('technologies')
class Technology {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  technology_name: string;
}

export default Technology;
