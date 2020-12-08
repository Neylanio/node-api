const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const requireDir = require('require-dir');

const app = express();

//Free acceess to any domain
app.use(cors());

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true, useUnifiedTopology: true });
requireDir('./src/models');

//Routes
app.use('/api', require('./src/routes'));

app.listen(3000);