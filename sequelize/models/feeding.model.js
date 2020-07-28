const { DataTypes } = require("sequelize");

// This function defines the sequalize model object
module.exports = sequelize => {
  sequelize.define("feeding", {
    time: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^([01]\d|2[0-3]):?[0-5]\d$/
      }
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
