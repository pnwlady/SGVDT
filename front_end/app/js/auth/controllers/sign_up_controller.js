var baseUrl = require('../../config').baseUrl;
module.exports = function(app) {
  app.controller('SignUpController', ['$http', '$location',  'HandleError', function($http, $location, handleError) {
    this.signup = true;
    this.errors = [];
    this.buttonText = 'Create New User!'
    this.authenticate = function(user) {
      $http.post(baseUrl + '/api/signup', user)
        .then((res) => {
          window.localStorage.token = res.data.token;
          $location.path('/signup');
        }, handleError(this.errors, 'Could not create user'));
    };
  }]);
};
