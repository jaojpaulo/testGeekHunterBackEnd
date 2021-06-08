import { Request, Response } from 'express';

export default class JobsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { city, experience, technologies } = request.body;

    return response.json({
      city,
      experience,
      technologies,
    });
  }
}
