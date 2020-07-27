// reference: https://github.com/sequelize/express-example/

const { Sequelize } = require("sequelize");
const config = require("config");
const dbConfig = config.get("dbConfig");

const sequelize = new Sequelize(dbConfig.DATABASE, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: "mysql"
});

const models = [require("./models/feeding.model")];

// Initialize all models.
for (const model of models) {
  model(sequelize);
}

// Export the sequelize connection instance to be used around our app.
module.exports = sequelize;
