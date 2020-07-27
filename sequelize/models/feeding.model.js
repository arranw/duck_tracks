const { DataTypes } = require("sequelize");

// This function defines the sequalize model object
module.exports = sequelize => {
  sequelize.define("feeding", {
    time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    duck_quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    food_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    food_quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
};
