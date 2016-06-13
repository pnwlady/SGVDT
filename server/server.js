if (!process.env.APP_SECRET) {
  throw new Error('you need to set app secret env variable');
}

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5555;

const offensesRouter = require(__dirname + '/router/offenses_router');
const userRouter = require(__dirname + '/router/user_router');
const newsRouter = require(__dirname + '/router/news_router');
var setupProductionDb = require(__dirname + '/lib/set_interval');

const mongooseConnect = process.env.MONGODB_URI || 'mongodb://localhost/sgvdt_appDB';

var setUp = function(port, mongooseConnect, callBack) {
  mongoose.connect(mongooseConnect);
  setupProductionDb();
  return app.listen(port, callBack);
};

setUp(port, mongooseConnect, () => {
  console.log('')
})
app.use(express.static(__dirname + '/build'))
  .get('*', function(req, res) {
    res.redirect('/#' + req.url);
  });

// app.use(function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, token');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   next();
// });

app.use('/api', newsRouter);
app.use('/api', offensesRouter);
app.use('/', userRouter);
app.use('/*', (req, res) => {
  res.status(404).send('not found');
});


app.get('/signup', (req, res) => {
  res.redirect('/#' + req.url);
});

module.exports = exports = app.listen(port, () => console.log('server up on port: ' + port));
