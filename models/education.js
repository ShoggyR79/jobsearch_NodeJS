'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Education extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Education.init({
    profileId: DataTypes.INTEGER,
    subject: DataTypes.STRING,
    school: DataTypes.STRING,
    qualifications: DataTypes.STRING,
    fromDate: DataTypes.DATE,
    toDate: DataTypes.DATE,
    achievements: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Education',
  });
  return Education;
};