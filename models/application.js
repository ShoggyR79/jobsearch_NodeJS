'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Application extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Job, Applicant}) {
      // define association here
      this.belongsTo(Job, {
        foreignKey: "jobId"
      })
      this.belongsTo(Applicant, {
        foreignKey:"applicantId"
      })
    }
  };
  Application.init({
    applicantId: DataTypes.INTEGER,
    jobId: DataTypes.INTEGER,
    resume: DataTypes.STRING,
    contactPoint: DataTypes.STRING
  }, {
    sequelize,
    paranoid: true,
    deletedAt: 'destroyTime',
    modelName: 'Application',
    
  });
  return Application;
};