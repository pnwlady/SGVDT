const express = require('express');
const app = express();
const mongoose = require('mongoose');
const offensesRouter = require(__dirname + '/router/offenses_router');
const userRouter = require(__dirname + '/router/user_router');
const newsRouter = require(__dirname + '/router/news_router');

app.use(function(req, res, next) {
res.header('Access-Control-Allow-Origin', '*');
res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, token');
res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
next();
});

app.use('/api', newsRouter);
app.use('/api', offensesRouter);
app.use('/', userRouter);
app.use('/*', (req, res) => {
  res.status(404).send('not found');
});

module.exports = exports = function(port, mongooseConnect, callBack) {
  mongoose.connect(mongooseConnect);
  return app.listen(port, callBack);
};
