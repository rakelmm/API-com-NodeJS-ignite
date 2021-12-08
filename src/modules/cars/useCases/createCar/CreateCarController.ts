import { Request, Response } from "express";
import { container } from "tsyringe"

import { CreatecarUseCase } from "./CreateCarUseCase";

class CreateCarController {

  async handle(request: Request, response: Response): Promise<Response> {
    const {
      name, 
      description, 
      daily_rate, 
      license_plate, 
      fine_amount, 
      brand, 
      category_id,
    } = request.body;

    const createcaruseCase = container.resolve(CreatecarUseCase);

    const car = await createcaruseCase.execute({
      name, 
      description, 
      daily_rate, 
      license_plate, 
      fine_amount, 
      brand, 
      category_id,
    });

    return response.status(201).json(car);
  }
}

export { CreateCarController }