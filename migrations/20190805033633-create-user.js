'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      gender: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.STRING,
        allowNull: true
      },
      proceduresCreated: {
        type: Sequelize.INTEGER
      },
      proceduresEdited: {
        type: Sequelize.INTEGER
      },
      documentsCreated: {
        type: Sequelize.INTEGER
      },
      documentsEdited: {
        type: Sequelize.INTEGER
      },
      passwordResetCount: {
        type: Sequelize.INTEGER
      },
      companyRoleID: {
        type: Sequelize.INTEGER,
        onDelete: 'NO ACTION',
        onUpdate: 'CASCADE',
        references: {
          model: 'CompanyRoles',
          key: 'id',
          as: 'companyRoleID'
        }
      },
      systemRoleID: {
        type: Sequelize.INTEGER,
        onDelete: 'NO ACTION',
        onUpdate: 'CASCADE',
        references: {
          model: 'SystemRoles', //has to be pluralized
          key: 'id',
          as: 'systemRoleID'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }, 

      socialLogID: {
        allowNull: false, 
        type:Sequelize.STRING,
        unique:true
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};