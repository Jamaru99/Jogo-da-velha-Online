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

//iniciando o DB
mongo.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true});
requireDir('./src/models');

// Rotas
app.use('/api', require('./src/routes'));


app.listen(3001);