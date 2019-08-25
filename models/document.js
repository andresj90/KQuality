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
    version: {
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
      allowNull: false
     },    

  });
  Document.associate = function(models) {
    // associations can be defined here
  };
  return Document;
};