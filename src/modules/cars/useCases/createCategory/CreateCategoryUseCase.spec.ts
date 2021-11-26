import { CategoriesRepositoryInMemory } from "../../repositories/in-memory/CategoriesRepositoryInMemory";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase"
import { Category } from "../../entities/Category";

let createCategoryUseCase: CreateCategoryUseCase;
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;

describe("Create category", () => {
  beforeEach(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
    createCategoryUseCase = new CreateCategoryUseCase( categoriesRepositoryInMemory);
  })

  it("should be able to create a new category", async () => {
    const category = {
      name: "Category Test",
      description: "Category description test",    
    }
    await createCategoryUseCase.execute({
      name: Category.name,
      description: "Category description test",                        
    });

    const categoryCreated = await categoriesRepositoryInMemory.findByName(category.name);

    console.log(categoryCreated);

    expect(categoryCreated).toHaveProperty("id");
  });
});

