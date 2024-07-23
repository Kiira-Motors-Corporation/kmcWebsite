'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'Carts', // name of the existing table
      'userName', // name of the new column
      {
        type: Sequelize.STRING,
        allowNull: false,
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Carts', 'userName');
  }
};
