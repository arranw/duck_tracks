const request = require("supertest");
const app = require("../express/app");

const sequelize = require("../sequelize");
const { models } = require("../sequelize");

const mockData = [
  {
    time: "14:13",
    location: "Rotary Park",
    duck_quantity: 5,
    food_type: "Bread",
    food_quantity: 350
  },
  {
    time: "00:29",
    location: "Elliston Park",
    duck_quantity: 10,
    food_type: "Fish",
    food_quantity: 750
  },
  {
    time: "23:11",
    location: "Prince's Island Park",
    duck_quantity: 3,
    food_type: "Insect",
    food_quantity: 1200
  }
];

describe("Feeding Endpoints", () => {
  beforeEach(async () => {
    await models.feeding.destroy({
      where: {},
      truncate: true
    });

    mockData.forEach(async data => await models.feeding.create(data));
  });

  it("should create a new feeding", async () => {
    const res = await request(app).post("/api/feedings").send(mockData[0]);

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("id");
  });

  it("should return a specific feeding", async () => {
    const res = await request(app).get("/api/feedings/1").send();

    expect(res.statusCode).toEqual(200);

    expect(res.body.id).toBe(1);
    expect(res.body.time).toBe("14:13");
    expect(res.body.location).toBe("Rotary Park");
    expect(res.body.duck_quantity).toBe(5);
    expect(res.body.food_type).toBe("Bread");
    expect(res.body.food_quantity).toBe(350);
  });

  it("should return array of feedings", async () => {
    const res = await request(app).get("/api/feedings").send();

    expect(res.statusCode).toEqual(200);
    expect(res.body).toContainEqual(
      expect.objectContaining({
        id: expect.anything(),
        time: expect.anything(),
        location: expect.anything(),
        duck_quantity: expect.anything(),
        food_type: expect.anything(),
        food_quantity: expect.anything(),
        createdAt: expect.anything(),
        updatedAt: expect.anything()
      })
    );
  });
});

afterAll(async done => {
  // Closing the DB connection allows Jest to exit successfully.
  sequelize.close();
  done();
});
