var angular = require('angular');

describe('SignIn Test', () => {
  var $httpBackend;
  var $controller;
  var signInController;

  beforeEach(angular.mock.module('sgvdtApp'));

  beforeEach(angular.mock.inject((_$controller_) => {
    $controller = _$controller_;
  }));

  beforeEach(angular.mock.inject((_$httpBackend_) => {
    $httpBackend = _$httpBackend_;
    signInController = $controller('SignInController');
  }));

  afterEach(() => {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should be a controller', () => {
    expect(typeof signInController).toBe('object');
    expect(typeof signInController.authenticate).toBe('function');
  });

  it('It should signin a user', () => {
    $httpBackend.expectGET('api/signin')
    .respond(200, { token: 'testResponse' });
    signInController.user = { username: '', password: '' };
    signInController.user.password = 'TestPassword123';
    signInController.user.username = 'TestUser';
    signInController.authenticate(signInController.user);
    $httpBackend.flush();
    expect(window.localStorage.token).toBe('testResponse');
  });
});
