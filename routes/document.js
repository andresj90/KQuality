const Document = require('../controllers/document');
const documentRouter = require('express').Router();
const multer = require('multer');
const path = require('path');


/* setting up the storage disk */

var storage = multer.diskStorage({
   destination: (req, file, cb) => {
       cb(null, '/files/');
   },
   filename: (req, file, cb) => {
       cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
   }
});


//will be using this for uplading
const upload = multer({ storage: storage })

/* Route for document creation */
documentRouter.post('/create', upload.single('profile'), (req, res) => {
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
   
   // console.log('storage location is ', req.hostname +'/' + req.file);

    console.log(req.body);
    //return res.send(req.file);

   //Document.addDocument(newDoc, res);

});

/* Route to get all documents */

documentRouter.get('/all', (req, res) => {
   Document.getAllDocuments(res);
});


/* exports router handler */

module.exports = documentRouter;