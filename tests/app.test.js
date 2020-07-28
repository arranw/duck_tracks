const request = require("supertest");
const app = require("../express/app");

const sequelize = require("../sequelize");
const { models } = require("../sequelize");

const mockData = [
  {
    time: "2020-03-05 14:13:36",
    location: "Rotary Park",
    duck_quantity: 5,
    food_type: "Sunflower Seeds",
    food_quantity: 350
  },
  {
    time: "2018-12-05 00:29:11",
    location: "Elliston Park",
    duck_quantity: 10,
    food_type: "Sourdough Bread",
    food_quantity: 750
  },
  {
    time: "2016-01-05 23:11:55",
    location: "Prince's Island Park",
    duck_quantity: 3,
    food_type: "Corn",
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
    const res = await request(app).post("/api/feedings").send({
      time: "2020-03-05 14:29:36",
      location: "Rotary Park",
      duck_quantity: 5,
      food_type: "Sunflower Seeds",
      food_quantity: 350
    });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("time");
    expect(res.body).toHaveProperty("location");
    expect(res.body).toHaveProperty("duck_quantity");
    expect(res.body).toHaveProperty("food_type");
    expect(res.body).toHaveProperty("food_quantity");
  });

  it("should return a specific feeding", async () => {
    const res = await request(app).get("/api/feedings/1").send();

    expect(res.statusCode).toEqual(200);

    expect(res.body.id).toBe(1);
    expect(res.body).toHaveProperty("time");
    expect(res.body.location).toBe("Rotary Park");
    expect(res.body.duck_quantity).toBe(5);
    expect(res.body.food_type).toBe("Sunflower Seeds");
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
