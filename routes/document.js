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
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

//will be using this for uplading
const upload = multer({ storage: storage });



/* Route for document creation */
documentRouter.post('/create', upload.single('file'), (req, res) => {
   /*Build object with params from form  */
   // let newDoc = {
   //    code: req.body.code,
   //    name: req.body.name,
   //    type: req.body.type,
   //    description: req.body.description,
   //    procedure: req.body.procedure,
   //    area: req.body.area,
   //    attachment: req.body.file,
   //    documentPrefixID: req.body.documentPrefixID
   // }
   
    console.log('storage location is ', req.hostname +'/' + req.file);

   res.json({msg: req.file});
   
//    console.log(JSON.stringify(req.file.path));

   // Document.addDocument(newDoc, res);

});

/* Route to get all documents */

documentRouter.get('/all', (req, res) => {
   Document.getAllDocuments(res);
});


/* exports router handler */

module.exports = documentRouter;