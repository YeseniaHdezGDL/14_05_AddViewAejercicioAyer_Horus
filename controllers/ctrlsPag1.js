'use scrict'

const modelP1 = require('../models/modelPag1.js')
const url = require('url');
const pag1 = (req) => {
   var result = modelP1();
    procesaGet(req, result);
    return (JSON.stringify(result));

};
function procesaGet(peticion, result) {
    console.log(peticion.url);
    let miURL = url.parse(peticion.url, true);
    if (miURL.query.func === 'alta') {
        let nuevoRegistro = {
            nombre: miURL.query.n,
            primerApellido: miURL.query.prA,
            segundoApellido: miURL.query.seA
        }
        result.push(nuevoRegistro);
    }
}

module.exports = pag1;

//dar de alta, dar de baja y modificar datos



