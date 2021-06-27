import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListTechnologiesService from '@modules/technologies/services/ListTechnologiesService';

export default class TechnologyController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listTechnologies = container.resolve(ListTechnologiesService);

    const technologiesList = await listTechnologies.execute();

    return response.json(technologiesList);
  }
}
