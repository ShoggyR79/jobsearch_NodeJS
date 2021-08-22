'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Applicant, WorkHistory, Education, Language, Reference}) {
      // define association here
      this.belongsTo(Applicant,{
        foreignKey:"applicantId"
      })
      this.hasMany(WorkHistory, {
        foreignKey: "profileId"
      })
      this.hasMany(Education, {
        foreignKey:"profileId"
      })
      this.hasMany(Language,{
        foreignKey:"profileId"
      })
      this.hasMany(Reference,{
        foreignKey:"profileId"
      })
      
    }
  };
  Profile.init({
    applicantId: DataTypes.INTEGER,
    jobTitle: DataTypes.STRING,
    yearOfExperience: DataTypes.STRING,
    latestCompany: DataTypes.STRING,
    highestEducation: DataTypes.STRING,
    summary: DataTypes.STRING,
    phoneNum: DataTypes.STRING,
    gender: DataTypes.STRING,
    maritalStatus: DataTypes.STRING,
    country: DataTypes.STRING,
    address: DataTypes.STRING,
    expectedLocations: DataTypes.STRING,
    willingToRelocate: DataTypes.BOOLEAN,
    expectedCategory: DataTypes.STRING,
    expectedJobLevel: DataTypes.STRING,
    expectedSalary: DataTypes.STRING,
    expectedBenefits: DataTypes.STRING
  }, {
    sequelize,
    paranoid: true,
    deletedAt: 'destroyTime',
    modelName: 'Profile',
  });
  return Profile;
};