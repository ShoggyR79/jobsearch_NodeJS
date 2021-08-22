'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WorkHistory extends Model {
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
  WorkHistory.init({
    profileId: DataTypes.INTEGER,
    position: DataTypes.STRING,
    company: DataTypes.STRING,
    fromDate: DataTypes.DATE,
    toDate: DataTypes.DATE,
    isCurrentJob: DataTypes.BOOLEAN,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'WorkHistory',
  });
  return WorkHistory;
};