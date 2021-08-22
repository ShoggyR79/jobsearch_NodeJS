'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Skill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Profile }) {
      // define association here
      this.belongsTo(Profile, {
        foreignKey: "profileId"
      })
    }
  };
  Skill.init({
    profileId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    proficiency: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Skill',
  });
  return Skill;
};