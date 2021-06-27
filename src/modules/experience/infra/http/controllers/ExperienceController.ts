import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListExperienceService from '@modules/experience/services/ListExperienceService';

export default class ExperienceController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listExperience = container.resolve(ListExperienceService);

    const experienceList = await listExperience.execute();

    return response.json(experienceList);
  }
}
