const angular = require('angular');

describe('it should get the offenses', () => {
  var $httpBackend;
  beforeEach(angular.mock.module('sgvdtApp'));
  beforeEach(angular.mock.inject((_$httpBackend_) => {
    $httpBackend = _$httpBackend_;
  }));

  afterEach(() => {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should get the mug resources', angular.mock.inject( (sgvdtResource) => {
    $httpBackend.expectGET('http://localhost:3000/api/offenses').respond(200, [{ summary: 'Big Ben' }]);
    var resourceArray = [{}, {}, {}];
    var errorsArray = [];
    var resource = new sgvdtResource(resourceArray, errorsArray, 'http://localhost:3000/api/offenses');
    resource.getAll();
    $httpBackend.flush();
    expect(resourceArray.length).toBe(1);
    expect(resourceArray[0].summary).toBe('Big Ben');
  }));
});
