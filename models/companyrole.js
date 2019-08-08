'use strict';
module.exports = (sequelize, DataTypes) => {
  const CompanyRole = sequelize.define('CompanyRole', {
    name: DataTypes.STRING
  }, {});
  CompanyRole.associate = function (models) {
    CompanyRole.hasMany(models.User, {
      foreignKey: 'companyRoleID',
      as: 'users'
    });
  };
  return CompanyRole;
};