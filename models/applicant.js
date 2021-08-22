'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Applicant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Application, Profile}) {
      // define association here
      this.hasMany(Application, {
        foreignKey: "applicantId"
      })
      this.hasOne(Profile, {
        foreignKey: "applicantId"
      })
    }
  };
  Applicant.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    birthday: DataTypes.DATE,
    image: DataTypes.STRING,
    location: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    paranoid: true,
    deletedAt: 'destroyTime',
    modelName: 'Applicant',
  });
  return Applicant;
};