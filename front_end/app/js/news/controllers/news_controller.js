const baseUrl = require(__dirname + '/../../config');

module.exports = exports = function(app) {
  app.controller('NewsController', ['newsResource', function(Resource) {
    this.articles = [];
    this.errors = [];
    var remote = new Resource(this.articles, this.errors, baseUrl + '/api/news',
      { errMessages: { getArticles: 'could not retrieve news articles' } });
    this.getArticles = remote.getArticles.bind(remote);
    this.getArticles();
  }]);
};
