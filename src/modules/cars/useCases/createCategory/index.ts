import CategoriesRepository  from "../../repositories/CategoriesRepository";
import { CreatecategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const categoriesRepository = new CategoriesRepository();

const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository); 

const createCategoryController = new CreatecategoryController(
  createCategoryUseCase
);

export { createCategoryController };