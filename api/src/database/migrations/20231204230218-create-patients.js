'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('patients', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      cpf: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      gender: {
        type: Sequelize.STRING,
        allowNull: false
      },
      health_condition: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      region_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'regions',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('patients');
  }
};
