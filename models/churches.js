'use strict';
module.exports = (sequelize, DataTypes) => {
  const Churches = sequelize.define('Churches', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    mailing_one: DataTypes.STRING,
    mailing_two: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING
  }, {});
  Churches.associate = function(models) {
    // associations can be defined here
  };
  return Churches;
};