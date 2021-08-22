'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Applications', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      applicantId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model: "Applicants",
          key: "id"
        }
      },
      jobId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model: "Jobs",
          key:"id"
        }
      },
      resume: {
        allowNull: false,
        type: Sequelize.STRING
      },
      contactPoint: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      destroyTime:{
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Applications');
  }
};