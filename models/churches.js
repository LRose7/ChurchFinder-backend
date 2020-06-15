'use strict';
module.exports = (sequelize, DataTypes) => {
  const churches = sequelize.define('churches', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Description: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    Mailing_One: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Mailing_Two: {
      type: DataTypes.STRING,
      allowNull: false
    },
    City: {
      type: DataTypes.STRING,
      allowNull: false
    },
    State: {
      type: DataTypes.STRING,
      allowNull: false
    },
    PostalCode: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Denomination: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Web_URL: {
      type: DataTypes.STRING,  
    },    
    Latitude: {
      type: DataTypes.DECIMAL(10, 8),
      allowNull: false
    },
    Longitude: {
      type: DataTypes.DECIMAL(11, 8),
      allowNull: false
    }
  }, {});
  churches.associate = function(models) {
    // associations can be defined here
  };
  return churches;
};