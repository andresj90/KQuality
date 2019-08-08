'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    proceduresCreated: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    proceduresEdited: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    documentsCreated: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    documentsEdited: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    passwordResetCount: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  });
  User.associate = function (models) {
    //A user has a role in the system assigned 
    User.belongsTo(models.SystemRole, {
      foreignKey: 'systemRoleID',
      onDelete: 'CASCADE'
    });

    User.belongsTo(models.CompanyArea, {
      foreignKey: 'companyAreaID',
      onDelete: 'CASCADE'
    });

    User.belongsTo(models.CompanyRole, {
      foreignKey: 'companyRoleID',
      onDelete: 'CASCADE'
    });
  };
  return User;
};