module.exports = function(app) {
  require('./handle_error')(app);
  require('./sgvdt_resource')(app);
  require('./offense_resource')(app);
  require('./news_resource')(app);
};
