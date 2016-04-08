var pwdService = require('password-hash-and-salt');
var jwt    = require('jsonwebtoken');

module.exports = function(apiRoutes, app) {
  apiRoutes.use(function(req, res, next) {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (token) {
      jwt.verify(token, app.get('secret'), function(err, decoded) {
        if (err) {
          return res.json({ success: false, message: 'Failed to authenticate token. ' + err});
        } else {
          req.decoded = decoded;
          next();
        }
      });
    } else {
      return res.status(403).send({
          success: false,
          message: 'No token provided.'
      });

    }
  });
};
