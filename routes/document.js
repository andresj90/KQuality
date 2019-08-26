const Document = require('../controllers/document');
const documentRouter = require('express').Router();
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart({
   uploadDir: './files'
});
const formidable = require('formidable');
const multer = require('multer');



/* Route for document creation */
documentRouter.post('/create', multipartMiddleware, (req, res) => {
   /*Build object with params from form  */
   let newDoc = {
      code: req.body.code,
      name: req.body.name,
      type: req.body.type,
      description: req.body.description,
      procedure: req.body.procedure,
      area: req.body.area,
      attachment: req.body.attachment,
      documentPrefixID: req.body.documentPrefixID
   }

    console.log(req);

   Document.addDocument(newDoc, res);

});

/* Route to get all documents */

documentRouter.get('/all', (req, res) => {
   Document.getAllDocuments(res);
});


/* exports router handler */

module.exports = documentRouter;