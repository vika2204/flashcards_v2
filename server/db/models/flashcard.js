'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flashcard extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Topic, {
        foreignKey: 'topic_id'
      })
    }
  }
  Flashcard.init({
    question: DataTypes.STRING,
    answer: DataTypes.STRING,
    topic_id: DataTypes.INTEGER,
    img_path: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Flashcard',
  });
  return Flashcard;
};