
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();
var userService = require('./routes/userService'),
    cms = require('./routes/cms');

function changeContentType(req, res, next) {
    function update(req) {
      console.log(req.method);
      var str = req.headers['content-type'] || '',
          contentType = str.split(';')[0],
          isAppJson = contentType === 'application/json',
          newHeader = isAppJson ? str.replace('application/json', 'text/plain') : str;
      req.headers['content-type'] = newHeader;
    }
    if(req.method === 'GET') update(req);
    return next();
  }

app.configure(function(){
  app.set('port', process.env.PORT || 7000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(changeContentType);
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(express.session());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(require('stylus').middleware(__dirname + '/public'));
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.post('/sp-cms-backend/rest/listing/attributes', cms.getSla);
app.get('/', routes.index);
app.get('/users', user.list);
app.get('/userservice/v0.1/customer/:customerId/addresses', userService.getAddresses);


http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
