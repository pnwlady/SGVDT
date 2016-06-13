module.exports = function(app) {
  app.factory('newsResource', ['$http', 'sgvHandleError', function($http, handleError) {
    var Resource = function(resourceArr, errorsArr, baseUrl, options) {
      this.data = resourceArr;
      this.url = baseUrl;
      this.errors = errorsArr;
      this.options = options || {};
      this.options.errMessages = this.options.errMessages || {};
    };

    Resource.prototype.getArticles = function() {
      return $http.get('http://localhost:3000/api/news')
        .then((res) => {
          var parsed = JSON.parse(res.data.text);

          this.data.splice(0);
          for (var i = 0; i < parsed.result.docs.length; i++) {
            this.data.push(parsed.result.docs[i]);

          }
          for (var j = 0; j < this.data.length; j++) {
            var date = this.data[j].source.enriched.url.publicationDate.date;
            date = date.substr(0, 8);
            var year = date.substr(0, 4);
            var month = date.substr(4, 2);
            var day = date.substr(6, 2);
            date = month + '-' + day + '-' + year;
            this.data[j].source.enriched.url.publicationDate.date = date;
            if (this.data[j].source.enriched.url.image ===
                'http://cdn2-b.examiner.com/sites/default/files/styles/' +
                'hero_curated_large/hash/2d/c5/2dc5a83e70de9c2871246c4b84bbfd41.jpg?itok=sPDSQNZ5') {
                this.data[j].source.enriched.url.image =
                'http://cdn2-b.examiner.com/sites/default/files/styles/' +
                'image_content_width/hash/09/a4/09a4544d1786b6ac7d4b7b5a39442f38.JPG?itok=lKD_1hdy';
            }
          }
        }, handleError(this.errors, this.options.errMessages.getAll || 'could not fetch resource'));
    };
    return Resource;
  }]);
};
