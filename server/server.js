
const express = require('express');
const app = express();
const PORT = 3000;
const mongoose = require('mongoose');

const Crime = require(__dirname + '/../model/crime');
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/crimes_db');


const crimeRouter = require(__dirname + '/router/crime_router');



app.use('/api', crimeRouter);
app.listen(PORT, () => console.log('server up on ' + PORT));

const server = require(__dirname + '/_server');
const port = process.env.PORT || 3000;
const mongooseConnect = process.env.MONGODB_URI || 'mongodb://localhost/sgvdt_appDB';

server(port, mongooseConnect, () => {
  console.log('server up on ' + port);
});
