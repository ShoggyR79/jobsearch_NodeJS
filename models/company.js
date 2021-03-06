'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Job}) {
      // define association here
      this.hasMany(Job, {
        foreignKey: "companyId"
      })
    }
  };
  Company.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    location: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    status: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    paranoid: true,
    deletedAt: 'destroyTime',
    modelName: 'Company',
  });
  return Company;
};