const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const mongoose = require('mongoose');
const mongooseConnect = process.env.MONGO_URI = 'mongodb://localhost/daily_test_db';

process.env.APP_SECRET = 'hiLogan';
const port = process.env.PORT = 5555;
const app = require(__dirname + '/../server/server');
var server;

const Offense = require(__dirname + '/../server/model/offense');
const dailyData = require(__dirname + '/../server/lib/daily_update');

describe('the dailyData update function', function() {
  this.timeout(4000);
  before((done) => {
    server = app(port, mongooseConnect, () => {
      console.log('server up on ' + port);
      done();
    });
  });
  after( (done) => {
    mongoose.connection.db.dropDatabase(() => {
      mongoose.disconnect(() => {
        server.close( () => {
          done();
        });
      });
    });
  });

  it('should update the database from SEA.gov data api', (done) => {
    dailyData( () => {
      Offense.count((err, data) => {
        expect(err).to.eql(null);
        expect(data).to.above(0);
        done();
      });
    });
  });
});
