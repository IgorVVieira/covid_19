'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('regions', [
      { name: 'NORTE', created_at: new Date(), updated_at: new Date() },
      { name: 'CENTRO-OESTE', created_at: new Date(), updated_at: new Date() },
      { name: 'NORDESTE', created_at: new Date(), updated_at: new Date() },
      { name: 'SUDESTE', created_at: new Date(), updated_at: new Date() },
      { name: 'SUL', created_at: new Date(), updated_at: new Date() },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('regions', null, {});
  }
};
