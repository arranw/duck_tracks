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
    // before each test

    // clear the database
    await models.feeding.destroy({
      where: {},
      truncate: true
    });

    // insert a record for each of our mock data points
    mockData.forEach(async data => await models.feeding.create(data));
  });

  it("should create a new feeding", async () => {
    // add the first mock data point
    const res = await request(app).post("/api/feedings").send(mockData[0]);

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("id");
  });

  it("should return a specific feeding", async () => {
    // retrieve the first record in the database
    const res = await request(app).get("/api/feedings/1").send();

    expect(res.statusCode).toEqual(200);

    expect(res.body.id).toBe(1);
    expect(res.body.time).toBe(mockData[0].time);
    expect(res.body.location).toBe(mockData[0].location);
    expect(res.body.duck_quantity).toBe(mockData[0].duck_quantity);
    expect(res.body.food_type).toBe(mockData[0].food_type);
    expect(res.body.food_quantity).toBe(mockData[0].food_quantity);
  });

  it("should return array of feedings", async () => {
    const res = await request(app).get("/api/feedings").send();

    expect(res.statusCode).toEqual(200);
    // ensure the model comes back with the correct attributes
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
