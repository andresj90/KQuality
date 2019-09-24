'use strict';
module.exports = (sequelize, DataTypes) => {
  const CompanyArea = sequelize.define('CompanyArea', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      is: ["^[a-z]+$", 'i']
    },
    description: {
      type: DataTypes.STRING,
      allowNull:false
     },
     upperAreaID: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  });
  CompanyArea.associate = function (models) {
    CompanyArea.hasMany(models.CompanyRole, {
      foreignKey: 'companyAreaID',
      as: 'users'
    });
  };
  return CompanyArea;
};