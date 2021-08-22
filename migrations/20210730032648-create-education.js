'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Education', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      profileId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model:"Profiles",
          key:"id"
        }
      },
      subject: {
        allowNull: false,
        type: Sequelize.STRING
      },
      school: {
        allowNull: false,
        type: Sequelize.STRING
      },
      qualifications: {
        allowNull: false,
        type: Sequelize.STRING
      },
      fromDate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      toDate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      achievements: {
        type: Sequelize.STRING
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Education');
  }
};