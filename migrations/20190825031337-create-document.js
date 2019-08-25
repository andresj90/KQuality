'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Documents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      code: {
        type: Sequelize.STRING, 
        allowNull: false
       }, 
       name: {
         type: Sequelize.STRING, 
         allowNull: false
        }, 
       type: {
         type: Sequelize.STRING, 
         allowNull: false
        },
       description: {
         type: Sequelize.STRING, 
         allowNull: false
       },
       procedure: {
         type: Sequelize.STRING, 
         allowNull: false
        }, 
       area: {
         type: Sequelize.STRING, 
         allowNull: false
        },
       attachment: {
         type: Sequelize.STRING, 
         allowNull: true
        },    
      documentPrefixID: {
        type: Sequelize.INTEGER, 
        onDelete: 'CASCADE',
        references: {
          model: 'DocumentPrefixes',
          key: 'id',
          as: 'documentPrefixID'
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
    return queryInterface.dropTable('Documents');
  }
};