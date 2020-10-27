const express  = require("express");
const mongoose = require("mongoose");
const requireDir =  require("require-dir");

// Starting the app
const app = express();

//Permite que evie dados pára aplicação em formato de json
app.use(express.json());

//Starting  DATA BASE
mongoose.connect(
  'mongodb://localhost:27017/nodeapi'
);

requireDir('./src/models');

// Rotas
app.use('/api', require('./src/routes'));

app.listen(3001);