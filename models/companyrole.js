'use strict';
module.exports = (sequelize, DataTypes) => {
  const CompanyRole = sequelize.define('CompanyRole', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  CompanyRole.associate = function (models) {
    CompanyRole.belongsTo(models.CompanyArea, {
      foreignKey: 'companyAreaID',
      onDelete: 'NO ACTION',
      onUpdate: 'CASCADE'
    });

    CompanyRole.hasMany(models.User, {
      foreignKey: 'companyRoleID',
      as: 'users'
    });
  };
  return CompanyRole;
};