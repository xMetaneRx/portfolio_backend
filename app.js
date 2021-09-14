const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const informationRoutes = require('./routes/informationRoutes');
const projectsRoutes = require('./routes/projectsRoutes');

const app = express();

mongoose.connect(process.env.dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(process.env.PORT || 3000))
    .catch((err) => console.log(err))

app.use(express.urlencoded({extended: true}));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Acces-Control-Allow-Methods', 'GET');
    next();
})

app.use('/', informationRoutes);
app.use('/projects', projectsRoutes);