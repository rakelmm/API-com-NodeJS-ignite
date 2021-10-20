import { CategoriesRepository }  from "../../repositories/implementations/CategoriesRepository";
import { CreatecategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const categoriesRepository = CategoriesRepository.getInstance();

const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository); 

const createCategoryController = new CreatecategoryController(
  createCategoryUseCase
);

export { createCategoryController };