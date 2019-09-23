'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CompanyRoles', {
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
      description: {
        type: Sequelize.STRING,
        allowNull: false, 
      },
      companyAreaID: {
        type: Sequelize.INTEGER,
        onDelete: 'NO ACTION',
        onUpdate: 'CASCADE',
        references: {
          model: 'CompanyAreas',
          key: 'id',
          as: 'companyAreaID'
        },
        allowNull:false
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
    return queryInterface.dropTable('CompanyRoles');
  }
};