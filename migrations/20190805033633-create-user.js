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
        type: Sequelize.STRING
      },
      lastname: {
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
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
      companyAreaID: {
        type: Sequelize.INTEGER,
        onDelete: 'NO ACTION',
        onUpdate: 'CASCADE',
        references: {
          model: 'CompanyAreas',
          key: 'id',
          as: 'companyAreaID'
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
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};