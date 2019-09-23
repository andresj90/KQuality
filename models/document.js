'use strict';
module.exports = (sequelize, DataTypes) => {
  const Document = sequelize.define('Document', {
    code: {
     type: DataTypes.STRING, 
     allowNull: false
    }, 
    name: {
      type: DataTypes.STRING, 
      allowNull: false
     }, 
    type: {
      type: DataTypes.STRING, 
      allowNull: false
     },
    description: {
      type: DataTypes.STRING, 
      allowNull: false
    },
    procedure: {
      type: DataTypes.STRING, 
      allowNull: false
     }, 
    area: {
      type: DataTypes.STRING, 
      allowNull: false
     },
    attachment: {
      type: DataTypes.STRING, 
      allowNull: true
     }    
  });
  Document.associate = function(models) {
    Document.hasMany(models.DocumentCode, {
       foreignKey: 'documentID', 
       as: 'documentCodes'
    });
    Document.belongsTo(models.DocumentPrefix, {
       foreignKey: 'documentPrefixID', 
       onDelete: 'NO ACTION',
       onUpdate: 'CASCADE',
       constraints:true
    });
    Document.belongsTo(models.Procedure, {
      foreignKey: 'procedureID', 
      onDelete: 'NO ACTION',
      onUpdate: 'CASCADE',
      constraints:true
   });
  };
  return Document;
};