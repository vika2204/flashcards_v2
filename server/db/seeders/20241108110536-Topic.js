'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('Topics', [{
      name: 'Учишься балету, Поттер?',
      img_path: 'https://geekd-out.com/wp-content/uploads/2017/06/HP4GoF2194.jpg'
      },
      {
      name: 'Мемесы',
      img_path: 'https://i.pinimg.com/originals/87/ec/56/87ec562f6809b7e2b38bbd91b0e121cb.jpg'
      }], {});
    
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Topics', null, {});
     
  }
};
