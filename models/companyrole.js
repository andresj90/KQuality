'use strict';
module.exports = (sequelize, DataTypes) => {
  const CompanyRole = sequelize.define('CompanyRole', {
    name: {
     type: DataTypes.STRING,
     allowNull:false
    },
    description: {
      type: DataTypes.STRING,
      allowNull:false
     }
  }, {});
  CompanyRole.associate = function (models) {
    CompanyRole.hasMany(models.User, {
      foreignKey: 'companyRoleID',
      as: 'users'
    });
  };
  return CompanyRole;
};