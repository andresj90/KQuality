'use strict';
module.exports = (sequelize, DataTypes) => {
  const DocumentPrefix = sequelize.define('DocumentPrefix', {
    prefix: {
      type:DataTypes.STRING,
      allowNull:false
    }, 
    count: {
      type:DataTypes.INTEGER, 
      defaultValue: 0 
    }
  });
  DocumentPrefix.associate = function(models) {
    DocumentPrefix.hasMany(models.Document, {
      foreignKey: 'documentPrefixID', 
      as: 'documents'
    }); 
  };
  return DocumentPrefix;
};