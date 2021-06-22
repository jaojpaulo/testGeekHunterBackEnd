import Technology from '@modules/technologies/infra/typeorm/entities/Technology';

export default interface ICreateJobDTO {
  city: string;
  experience_id: string;
  technologies: Technology[];
}
