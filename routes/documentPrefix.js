const DocumentPrefix = require('../controllers/documentPrefix');
const prefixRouter = require('express').Router();


/* Route for document creation */
prefixRouter.post('/create',  (req, res) => {
    
   let newPrefix = {
      prefix: req.body.code,
      count: req.body.name
   }

    console.log(newPrefix)   
    DocumentPrefix.addDocumentPrefix(newPrefix, res);

});

/* Route to get all documents */

prefixRouter.get('/all', (req, res) => {
    DocumentPrefix.getAllDocumentsPrefixes(res);
});


/* exports router handler */

module.exports = prefixRouter;