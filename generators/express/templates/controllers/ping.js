var version = require('../package.json').version

module.exports = {
  show: function(req, res) {
    res.status(200).json({version: version})
  }
}
