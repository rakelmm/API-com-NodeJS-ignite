import request from "supertest";
import { hash } from "bcrypt";
import { app } from "@shared/infra/http/app";
import { v4 as uuid } from "uuid";

import createConnection from "@shared/infra/typeorm";
import { Connection } from "typeorm";

let connection: Connection;
describe("Create Category Controller", () => {

  beforeAll(async() => {
    connection = await createConnection();
    await connection.runMigrations();

    const id = uuid();
    const password = await hash("admin", 8);

    await connection.query(
        `INSERT INTO USER(id, email, password, "isAdmin", created_at, driver_license)
        alues('${id}', 'admin', 'admin@rentx.com.br', '${password}', true, 'now()', 'XXXXXX')`
    );
  });

  afterAll(async() => {
    await connection.dropDatabase();
    await connection.close();
  });

  it("shoud be able to create a new category", async () => { 
    const responseToken = await request(app).post("/sessions").send({
      password: "admin",
    });

    const { refresh_token } = responseToken.body;

    const response = await request(app).post("/categories").send({
      name: "Category Supertest",
      description: "Category Supertest",
    })
    .set({
      Authorization: `Bearer ${ refresh_token }`
    });
     
    expect(response.status).toBe(201);
  }); 
  it("shoud not be able to create a new category with name exists", async () => { 
    const responseToken = await request(app).post("/sessions").send({
      password: "admin",
    });

    const { refresh_token } = responseToken.body;

    const response = await request(app).post("/categories").send({
      name: "Category Supertest",
      description: "Category Supertest",
    })
    .set({
      Authorization: `Bearer ${refresh_token}`
    });
     
    expect(response.status).toBe(400);
  });      
});