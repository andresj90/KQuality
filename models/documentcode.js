'use strict';
module.exports = (sequelize, DataTypes) => {
  const DocumentCode = sequelize.define('DocumentCode', {
    code: {
     type:DataTypes.STRING,
     allowNull: false
    }   
  });
  DocumentCode.associate = function(models) {
    DocumentCode.belongsTo(models.Document , {
      foreignKey: 'documentID',
      onDelete: 'NO ACTION',
      onUpdate: 'CASCADE',
      constraints: true
    });
  };
  return DocumentCode;
};