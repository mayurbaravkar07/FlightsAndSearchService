'use strict';
module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define('City', {
    name: {
      type: DataTypes.STRING,
      allowNull:false,
      unique: true, // Add the unique constraint
    },
  }, {});
  City.associate = function(models) {
    // associations can be defined here
  };
  return City;
};
