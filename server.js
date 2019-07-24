const express = require('express');
const mongo = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser')
const requireDir = require('require-dir');

//iniciando o app
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors());
app.get('/JogoDaVelha.js', function(request, response){
    response.sendFile('JogoDaVelha.js', {root: 'src/views'});
});
app.get('/style.css', function(request, response){
    response.sendFile('style.css', {root: 'src/views'});
});
app.get('/', function(request, response){
    response.sendFile('index.html', {root: 'src/views'});
});

const connectionString = 'mongodb+srv://matheus:oie123123@velha-oruj6.mongodb.net/test?retryWrites=true&w=majority';

//iniciando o DB
mongo.connect(connectionString, {useNewUrlParser: true});
requireDir('./src/models');

// Rotas
app.use('/api', require('./src/routes'));


app.listen(3001);