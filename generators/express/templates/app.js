var express = require('express');
var logger = require('morgan');
var ping = require('./controllers/ping');
var app = express();

app.set('port', process.env.PORT || 8080);

app.use(logger('dev'));

app.route('/ping')
   .get(ping.show);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res) {
  res.status(err.status || 500);
  res.json(err);
});

app.listen(app.get('port'));

module.exports = app;
