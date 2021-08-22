'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('WorkHistories', {
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
      position: {
        allowNull: false,
        type: Sequelize.STRING
      },
      company: {
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
      isCurrentJob: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      description: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('WorkHistories');
  }
};