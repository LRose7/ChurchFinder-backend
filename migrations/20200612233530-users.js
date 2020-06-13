'use strict';

const { sequelize } = require("../models");

module.exports = {
  up: (queryInterface, Sequelize) => {

    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
   return queryInterface.createTable('users', { 
     UserId: {
       type: Sequelize.INTEGER,
       autoIncrement: true,
       primaryKey: true,
       allowNull: false
     },
     FirstName: {
       type: Sequelize.STRING,
       allowNull: false
     },
     LastName: {
       type: Sequelize.STRING,
       allowNull: false
     },
     Email: {
       type: Sequelize.STRING,
       unique: true
     },
     Username: {
       type: Sequelize.STRING, 
       unique: true
     },
     Password: {
       type: Sequelize.STRING,
     },
     Admin: {
       type: Sequelize.BOOLEAN,
       defaultValue: false
     },
     Deleted: {
       type: Sequelize.BOOLEAN,
       defaultValue: false
     },
     createdAt: {
       type: Sequelize.DATE,
       allowNull: false
     },
     updatedAt: {
       type: Sequelize.DATE,
       allowNull: false
     }

   });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
       return queryInterface.dropTable('users');
    */
  
  }
};
