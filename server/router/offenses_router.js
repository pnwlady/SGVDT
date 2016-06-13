const Router = require('express').Router;
const Offense = require(__dirname + '/../model/offense');
const eH = require(__dirname + '/../lib/error_handler');
var offenseRouter = module.exports = exports = Router();

offenseRouter.get(/offense/, (req, res) => {
  Offense.find( req.query, (err, data) => {
    if (err) return eH(err, res);
    res.status(200).json(data);
  });
});
