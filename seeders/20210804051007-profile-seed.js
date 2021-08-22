'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Profiles', [
      {
        id: 2,
        applicantId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        applicantId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        applicantId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
