'use strict';
module.exports = (sequelize, DataTypes) => {
  const systemRole = sequelize.define('systemRole', 
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      is: ["^[a-z]+$",'i']
    }
  });
  systemRole.associate = function(models) {
    // a system role has a lot of users associated
    systemRole.hasMany(models.User, {
       foreignKey: 'systemRoleID',
       as: 'users'
    });
  };
  return systemRole;
};