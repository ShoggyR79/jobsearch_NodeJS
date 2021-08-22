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
    await queryInterface.bulkInsert('Companies', [
      {
        id: 1,
        name: "Cybersoft",
        email: "cybersoft@gmail.com",
        password: "testing123",
        location: "Ho Chi Minh, Vietnam",
        description: "Đào tạo tư duy lập trình",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: "VinGroup",
        email: "vingroup@gmail.com",
        password: "testing123",
        location: "Ha noi, Vietnam",
        description: "Định hướng phát triển Việt Nam",
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
