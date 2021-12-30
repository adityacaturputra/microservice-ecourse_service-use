'use strict';
const bcrypt = require('bcrypt')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('users', [
      {
        name: 'aditya',
        profession: 'admin micro',
        role: 'admin',
        email: 'adityacaturputra25@gmail.com',
        password: await bcrypt.hash('rahasia1234', 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'widada',
        profession: 'backend dev',
        role: 'student',
        email: 'widadacaturputra25@gmail.com',
        password: await bcrypt.hash('rahasiaku1234', 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('users', null, {});
     
  }
};

// npx sequelize db:seed:all
// npx sequelize db:seed:undo:all