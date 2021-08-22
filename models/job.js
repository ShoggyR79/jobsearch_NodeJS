'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Company, Application }) {
      // define association here
      this.belongsTo(Company, {
        foreignKey: "companyId"
      })
      this.hasMany(Application, {
        foreignKey: "jobId"
      })
    }
  };
  Job.init({
    companyId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    address: DataTypes.STRING,
    position: DataTypes.STRING,
    description: DataTypes.STRING,
    requirements: DataTypes.STRING,
    skills: DataTypes.STRING,
    language: DataTypes.STRING,
    benefits: DataTypes.STRING
  }, {
    sequelize,
    paranoid: true,
    deletedAt: 'destroyTime',
    modelName: 'Job',
  });
  return Job;
};