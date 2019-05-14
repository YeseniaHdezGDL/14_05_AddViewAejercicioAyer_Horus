'use scrict'

const http = require('http');
const router = require('./router/router');
const host ='127.0.0.1'
const puerto = '3000';

// La línea de abajo es la forma sencilla
// http.createServer(router).listen(puerto);

http.createServer(router).listen(puerto, host, () => {
    console.log('La presente app corre en: ' + host + ":" + puerto);
});

////PARA AGREGAR NUEVOS REGISTROS ASÍ http://127.0.0.1:3000/pag1?func=alta&n=Noelia&prA=Arriaga&seA=Quiroz

