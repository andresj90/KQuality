/* DEFINING DEPENDENCIES */
const DocumentPrefix = require('../models').DocumentPrefix;
const models = require('../models');

/* BL Businness Logic */
module.exports.addDocumentPrefix = (prefix, res) => {
    /* We will verify if doc does not exist, if it does we will return false 
      true otherwise */
      console.log("controllador documento : " + JSON.stringify(document));
      DocumentPrefix.findOrCreate({where: {prefix: prefix.prefix}}).
      then(([prefix, created]) => {
          if(created) {
            res.json({
                success: true,
                msg: 'Document successfully added'
            });
          }else {
            res.json({
                success: false,
                docs: 'Document was not added, try again'
            });
          }
      }).catch(err => {
          return err
      })
  
}


module.exports.getAllDocumentsPrefixes = (res) => {
    DocumentPrefix.findAll().then(prefixes => {
        if (prefixes.length > 0) {
            res.json({
                success: true,
                elements: prefixes
            });
        } else {
            res.json({
                success: false,
                msg: 'the list of prefixes is empty, please add documents first, before you consul them'
            });
        }
    }).catch(err => {
        return res.json({
            success: false,
            msg: `Prefix cannot be created because ${err} `
        });
    });
}