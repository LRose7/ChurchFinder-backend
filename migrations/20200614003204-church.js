'use strict';

const { sequelize } = require("../models");

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
    return queryInterface.createTable('Churches', {
      Id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Description: {
        type: Sequelize.BLOB,
        allowNull: true
      },
      Mailing_One: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Mailing_Two: {
        type: Sequelize.STRING,
        allowNull: true
      },
      City: {
        type: Sequelize.STRING,
        allowNull: false
      },
      State: {
        type: Sequelize.STRING,
        allowNull: false
      },
      PostalCode: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      Denomination: {
        type: Sequelize.STRING,
        allowNull: true
      },
      Web_URL: {
        type: Sequelize.STRING,        
      },
      Latitude: {
        type: Sequelize.DECIMAL(10, 8),
        allowNull: false
      },
      Longitude: {
        type: Sequelize.DECIMAL(11, 8),
        allowNull: false
      },     
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    Example:
     return queryInterface.dropTable('Churches');
     */
  }
};