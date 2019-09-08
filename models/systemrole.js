'use strict';
module.exports = (sequelize, DataTypes) => {
  const SystemRole = sequelize.define('SystemRole', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      is: ["^[a-z]+$", 'i']
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  SystemRole.associate = function (models) {
    // a system role has a lot of users associated
    SystemRole.hasMany(models.User, {
      foreignKey: 'systemRoleID',
      as: 'users'
    });
  };
  return SystemRole;
};