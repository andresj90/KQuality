'use strict';
module.exports = (sequelize, DataTypes) => {
  const Procedure = sequelize.define('Procedure', {
    name : {
      type: DataTypes.STRING,
      allowNull: false 
    },
    type : {
      type: DataTypes.STRING,
      allowNull: false 
    }, 

    parentProcedureID : {
      type: DataTypes.INTEGER,
      allowNull: false,  
      defaultValue: 0
    }, 


  }, {});
  Procedure.associate = function(models) {
    Procedure.hasMany(models.Document, {
      foreignKey: 'procedureID', 
      as: 'procedures'
    }); 
  };
  return Procedure;
};