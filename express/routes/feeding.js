const express = require("express");
const router = express.Router();

const { models } = require("../../sequelize");

router.get("/", async (req, res) => {
  const feedings = await models.feeding.findAll();

  return res.status(200).json(feedings);
});

router.get("/:id", async (req, res) => {
  await models.feeding.create({
    time: "20:34",
    location: "Rotary Park",
    duck_quantity: 5,
    food_type: "Sunflower Seeds",
    food_quantity: 350
  });

  const feeding = await models.feeding.findByPk(req.params.id);

  if (!feeding) return res.status(404).send("Not Found");

  return res.status(200).json(feeding);
});

router.post("/", async (req, res) => {
  try {
    const feeding = await models.feeding.create(req.body);

    return res.status(201).json(feeding.id);
  } catch (err) {
    console.log(err);

    return res.status(400).send(err.message);
  }
});

module.exports = router;
