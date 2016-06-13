const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;
var setupProductionDb = require(__dirname + '/lib/set_interval');
const offensesRouter = require(__dirname + '/router/offenses_router');
const userRouter = require(__dirname + '/router/user_router');
const newsRouter = require(__dirname + '/router/news_router');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/sgvdt_appDB');

app.use('/api', newsRouter);
app.use('/api', offensesRouter);
app.use('/api', userRouter);
app.use(express.static(__dirname + '/../front_end/build'))
.get('*', (req, res) => {
  res.redirect('/#' + req.url);
});
app.use('/*', (req, res) => {
  res.status(404).send('not found');
});

app.use( (req, res, next) => {
res.header('Access-Control-Allow-Origin', '*');
res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, token');
res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
next();
});

module.exports = exports = app.listen(port, () => {
  console.log('server up on ' + port);
  setupProductionDb();
});
