import { inject, injectable } from "tsyringe";

import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { AppError } from "@shared/errors/AppError";


interface IRequest {
  name: string;
  description: string;
  daily_rate: number;
  license_plate: string;
  fine_amount: number;
  brand: string;
  category_id: string;
}

@injectable()
class CreatecarUseCase {
  constructor(
    @inject("CarsRepository")
    private carsRepository: ICarsRepository
  ) {}

  async execute({ 
    name, 
    description, 
    daily_rate, 
    license_plate, 
    fine_amount, 
    brand, 
    category_id,
  }: IRequest): Promise<Car> {

    const carAleadyExists = await this.carsRepository.findByLicensePlate(license_plate);

    if (carAleadyExists) {
      throw new AppError("Car already exists!");
    }

    const car = await this.carsRepository.create({
      name, 
      description, 
      daily_rate, 
      license_plate, 
      fine_amount, 
      brand, 
      category_id,
    });

    return car;
  }
}

export { CreatecarUseCase };