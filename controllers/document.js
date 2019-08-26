/* DEFINING DEPENDENCIES */
const Document = require('../models').Document;
const models = require('../models');

/* BL Businness Logic */
module.exports.addDocument = (document, res) => {
    /* We will verify if doc does not exist, if it does we will return false 
      true otherwise */
      console.log("controllador documento : " + JSON.stringify(document));
      Document.findOrCreate({where: {code: document.code}, defaults: {
        name: document.name,
        type: document.type,
        description: document.description,
        procedure: document.procedure,
        area: document.area,
        attachment: document.attachment,
        documentPrefixID: document.documentPrefixID
      }}).then(([doc, created]) => {

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


module.exports.getAllDocuments = (res) => {
    Document.findAll().then(documents => {
        if (documents.length > 0) {
            res.json({
                success: true,
                docs: documents
            });
        } else {
            res.json({
                success: false,
                msg: 'the list of documents is empty, please add documents first, before you consul them'
            });
        }
    }).catch(err => {
        return res.json({
            success: false,
            msg: `User cannot be created because ${err} `
        });
    });
}