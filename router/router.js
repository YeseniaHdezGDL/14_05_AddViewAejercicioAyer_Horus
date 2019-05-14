'use scrict'

const Pag1 = require('../controllers/ctrlspag1'); 
const url = require('url');

const router = (request, response) => { 
    if(request.url .startsWith('/pag1')) { 
        var result = Pag1(request);
        response.end(result);
    } else {
        response.end("You are in default website");
    }    
};




module.exports = router;