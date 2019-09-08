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
     }
  });
  CompanyArea.associate = function (models) {
    CompanyArea.hasMany(models.User, {
      foreignKey: 'companyAreaID',
      as: 'users'
    });
  };
  return CompanyArea;
};