module.exports = function(app) {
    app.controller('TwitterController', function() {
      this.errors = [];
      /* eslint-disable */
      this.spdTwitter = function() {
        (!function(d,s,id) {
          var js,
          fjs=d.getElementsByTagName(s)[0],
          p=/^http:/.test(d.location)?'http':'https';
          if(!d.getElementById(id)) {
            js=d.createElement(s);
            js.id=id;
            js.src=p+"://platform.twitter.com/widgets.js";
            fjs.parentNode.insertBefore(js,fjs);
          }}(document,"script","twitter-wjs"));
      };
      this.keywordTwitter = function() {
        (!function(d,s,id) {
          var js,
          fjs=d.getElementsByTagName(s)[0],
          p=/^http:/.test(d.location)?'http':'https';
          if(!d.getElementById(id)) {
            js=d.createElement(s);
            js.id=id;
            js.src=p+"://platform.twitter.com/widgets.js";
            fjs.parentNode.insertBefore(js,fjs);
          }}(document,"script","twitter-wjs"));
      };
      /* eslint-enable */
    });
};
