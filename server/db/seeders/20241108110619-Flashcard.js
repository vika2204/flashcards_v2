'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('Flashcards', [{
    question:'За что Министерство не отправляет в Азкабан?',
    answer:'За надувание тетушек',
    topic_id: 1,
    img_path:'https://i.pinimg.com/originals/43/c0/e2/43c0e2712228e179cf287f6ecdbe936b.jpg'
    },
    {
    question:'Под чем здесь Гарри?',
    answer:'Под зельем удачи',
    topic_id: 1,
    img_path:'https://pic.rutubelist.ru/video/28/dd/28dde8a1b74571e8e09d993b6539b910.jpg'
    },
    {
    question:'Cколько подарков?',
    answer:'36',
    topic_id: 1,
    img_path:'https://cdni.fancaps.net/file/fancaps-movieimages/689264.jpg'
    },
    {
    question:'С каким вкусом Дамблдору попалась конфета?',
    answer:'Ушная сера',
    topic_id: 1,
    img_path:'https://www.meewella.com/critic/images/film/Harry_Potter_Sorcerers_Stone_Screenshot_4117.jpg'
    },
    {
    question:'Характеристика Рона от Гермионы в этой сцене?',
    answer:'Последняя задница',
    topic_id: 1,
    img_path:'https://i.ytimg.com/vi/m4z76eFFDjU/maxresdefault.jpg'
    },
    {
    question:'Kакая страница?',
    answer:'394',
    topic_id: 1,
    img_path:'https://i.ytimg.com/vi/6pb4yOf3sRQ/maxresdefault.jpg'
    },
    {
    question:'Как открыть книгу?',
    answer:'Погладить по корешку',
    topic_id: 1,
    img_path:'https://i.pinimg.com/originals/4a/6b/3d/4a6b3da9710b15733aff202b91a6e8c1.jpg'
    },
    {
    question:'Как выглядел Рон на Святочном балу?',
    answer:'Как бабушка Тесси',
    topic_id: 1,
    img_path:'https://img.championat.com/i/t/i/16857101232062076230.jpg'
    },
    {
    question:'Какие тяги, брат?',
    answer:'Бархатные',
    topic_id: 2,
    img_path:'https://www.meme-arsenal.com/memes/277777e69a11c84f7c527f2bdb98d7b1.jpg'
    },
    {
    question:'За что ее хотят посадить?',
    answer:'За порезанные трусы',
    topic_id: 2,
    img_path:'https://otvet.imgsmail.ru/download/0c61c12443ca69c358d009e99cd4c5fc_i-1457.jpg'
    },
    {
    question:'Ради чего она готова на воровство?',
    answer:'Хлеба с маслом',
    topic_id: 2,
    img_path:'https://im.therecepts.com/recipes/1080/x/X4O1o_8LdI0_1080.jpg'
    },
    {
    question:'С чем отвалить?',
    answer:'Со своим этим самым',
    topic_id: 2,
    img_path:'https://i.pinimg.com/564x/82/6a/12/826a12c4eef100eb5e0b23f9febd48ec.jpg'
    },
    {
    question:'Куда парень очень хочет?',
    answer:'В Египет',
    topic_id: 2,
    img_path:'https://static17.tgcnt.ru/posts/_0/fc/fc5bbde8ade260a05c929e4d91e36e52.jpg'
    }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.bulkDelete('Flashcards', null, {});
     
  }
};
