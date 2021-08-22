'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reference extends Model {
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
  Reference.init({
    profileId: DataTypes.INTEGER,
    fullName: DataTypes.STRING,
    position: DataTypes.STRING,
    company: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNum: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Reference',
  });
  return Reference;
};