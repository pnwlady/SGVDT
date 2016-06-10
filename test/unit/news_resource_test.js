/* eslint-env karma */
const angular = require('angular');

describe('test the newsResource', function() {
  var $httpBackend;
  // var newsctrl;

  beforeEach(angular.mock.module('sgvdtApp'));
  beforeEach(angular.mock.inject((_$httpBackend_) => {
    $httpBackend = _$httpBackend_;
  }));

  afterEach( () => {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should make a GET request to /api/news to retrieve news articles from API',
    angular.mock.inject(function(newsResource) {

      $httpBackend.expectGET('http://localhost:3000/api/news');


      respond(200, [{ foo: 'bar' }]);

    var articlesArray = [];
    var errorsArray = [];
    var resource = new newsResource(this.articles, this.errors, 'http://localhost:3000/api/news',
      { errMessages: { getArticles: 'could not retrieve news articles' } });

    resource.getArticles();
    $httpBackend.flush();
    expect(true).toEqual(true);
    // expect(articlesArray.length).toBe(1);
    expect(articlesArray[0].article).toBe('bar');
    // expect(errorsArray.length).toBe(0);

    }));


});
