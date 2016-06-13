const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const request = chai.request;

const mongoose = require('mongoose');
var mongooseConnect = process.env.MONGO_URI = 'mongodb://localhost/offense_test_db';

process.env.APP_SECRET = 'hiLogan';
const port = process.env.PORT = 5555;
var app = require(__dirname + '/../server/server');
var server;

describe('the GET method on /api/news route', function() {
  this.timeout(4000);
  before( (done) => {
    server = app(port, mongooseConnect, () => {
      console.log('server up on' + port);
      done();
    });
  });
  after( (done) => {
    mongoose.connection.db.dropDatabase( () => {
      mongoose.disconnect( () => {
        server.close( () => {
          done();
        });
      });
    });
  });
  it('should GET the Alchemy API endpoint', (done) => {
    request('localhost:' + port)
      .get('/api/news')
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res.status).to.eql(200);
        expect(res).to.not.eql(null);
        done();
      });
  });
});
