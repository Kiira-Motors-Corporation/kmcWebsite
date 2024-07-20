'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'Carts', // name of the existing table
      'userId', // name of the new column
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users', // name of the referenced table
          key: 'id', // key in the referenced table
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Carts', 'userId');
  }
};
