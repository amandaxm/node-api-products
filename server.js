const express = require('express');
const cors = require('cors');
// iniciando o app
const app = express();

const mongoose = require('mongoose');
app.use(express.json());//permitir que envie dados com json
app.use(cors());
//iniciando o batabase
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/nodeapi', {
    useNewUrlParser: true
}).then(() => {
    console.log('Conectado com sucesso!');
}).catch((err) => {
    console.log('Aconteceu um erro' + err);
});

require('./src/models/Product'); //model registrado na aplicacao

//assim que receber requisicao / vai carregar o routes
app.use('/api', require('./src/routes'))// use= receber requisicao de todo tipo
//para acessar p backend em outra aplicação devemos instalar o cors
app.listen(3001);
