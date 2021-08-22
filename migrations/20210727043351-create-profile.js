'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Profiles', {
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
          model:"Applicants",
          key:"id"
        }
      },
      jobTitle: {
        type: Sequelize.STRING
      },
      yearOfExperience: {
        type: Sequelize.STRING
      },
      latestCompany: {
        type: Sequelize.STRING
      },
      highestEducation: {
        type: Sequelize.STRING
      },
      summary: {
        type: Sequelize.STRING
      },
      phoneNum: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      maritalStatus: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      expectedLocations: {
        type: Sequelize.STRING
      },
      willingToRelocate: {
        type: Sequelize.BOOLEAN
      },
      expectedCategory: {
        type: Sequelize.STRING
      },
      expectedJobLevel: {
        type: Sequelize.STRING
      },
      expectedSalary: {
        type: Sequelize.STRING
      },
      expectedBenefits: {
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
      destroyTime: {
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Profiles');
  }
};