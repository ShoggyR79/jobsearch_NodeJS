'use strict';
const bcryptjs = require("bcryptjs");
const salt = bcryptjs.genSaltSync(10);


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

    await queryInterface.bulkInsert('Applicants', [
      {
        id: 1,
        firstName: "Du",
        lastName: "Duong",
        email: "khaidu2002@gmail.com",
        password: bcryptjs.hashSync("testing123", salt),
        location: "Ho Chi Minh, Vietnam",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        firstName: "Hao",
        lastName: "Dang",
        email: "dangphuhao@gmail.com",
        password: bcryptjs.hashSync("testing123", salt),
        location: "Ha Noi, Vietnam",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        firstName: "Tuan",
        lastName: "Dao",
        email: "tuandao@gmail.com",
        password: bcryptjs.hashSync("testing123", salt),
        location: "Ho Chi Minh, Vietnam",
        createdAt: new Date(),
        updatedAt: new Date()
      }

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
