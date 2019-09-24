const Document = require('../controllers/document');
const documentRouter = require('express').Router();
const path = require('path');
const multer = require('multer');


/* setting up the storage disk */

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './files/');
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

//will be using this for uplading
const upload = multer({ storage: storage });



/* Route for document creation */
documentRouter.post('/create', upload.single('file'), (req, res) => {
   /*Build object with params from form  */
   console.log(req.file);
   let route; 
   if (req.file == undefined || req.file == null) {
       route = null;
   } else {
       route = req.file.path; 
   }

   let newDoc = {
      code: req.body.code[0],
      name: req.body.name,
      type: req.body.type,
      description: req.body.description,
      procedure: 'test procedure',
      area: 'test area',
      attachment: route,
      procedureID: req.body.procedureID,
      documentPrefixID: req.body.documentPrefixID
   }

   console.log(newDoc)
//    res.json({msg: req.file});
   
   Document.addDocument(newDoc, res);

});

/* Route to get all documents */

documentRouter.get('/all', (req, res) => {
   Document.getAllDocuments(res);
});


/* exports router handler */

module.exports = documentRouter;