const express = require('express');
const path = require('path');
const app = express();
const config = require('config');
const OAuth2client = require('oauth2client')
const request = require('request');
const restadapter = require('./restadapter');
const bodyParser = require('body-parser')
const auth = require('http-auth');
const basic = auth.basic({
        realm: "Simon Area."
    }, (username, password, callback) => { 
        // Custom authentication 
        // Use callback(error) if you want to throw async error. 
        callback(username === "opt" && password === "optshowcase");
    }
);
console.log('restart 1')
app.use(function(req,res,next){
    console.log('req path',req.path);
    if('/admin' == req.path){
        (auth.connect(basic))(req, res, next);
    }else{
        return next();
    }
})
app.use(function(req, res, next) {
  var oneof = false;
  if (req.headers.origin) { //req.headers.origin.match(/whateverDomainYouWantToWhitelist/g) ) {
      res.header('Access-Control-Allow-Origin', req.headers.origin);
      oneof = true;
  }
  if (req.headers['access-control-request-method']) {
      res.header('Access-Control-Allow-Methods', req.headers['access-control-request-method']);
      oneof = true;
  }
  if (req.headers['access-control-request-headers']) {
      res.header('Access-Control-Allow-Headers', req.headers['access-control-request-headers']);
      oneof = true;
  }
  if (oneof) {
      res.header('Access-Control-Max-Age', 60 * 60 * 24 * 365);
  }

  // intercept OPTIONS method
  if (oneof && req.method == 'OPTIONS') {
      res.status(200).send('DELETE,POST,DELETE,GET')
  } else {
      next();
  }
});
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static(path.join(__dirname, 'admin', 'dist')));
// Api Security
// let oauth2Client = new OAuth2client({
//   appId: config.oauth.appId,
//   secretKey: config.oauth.secretKey,
//   host: config.authServer.host,
//   port: config.authServer.port,
//   protocol: config.authServer.protocol
// });
// oauth2Client.getGrantAndToken((err, credentials) => {
//   if (credentials) {
//     console.log('credentials', credentials)
//   }
//   app.credentials = credentials;
//   app.use('/api/*',restadapter.bind({app:app}))
//   app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
//   });
//   app.get('/admin', function (req, res) {
//     res.sendFile(path.join(__dirname, 'admin', 'dist', 'index.html'));
//   });

//   const port = process.env.PORT || 3000;
//   console.log('App started at port ' + port + '!');
//   app.listen(port);
// })

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.get('/admin', function (req, res) {
  res.sendFile(path.join(__dirname, 'admin', 'dist', 'index.html'));
});


const port = process.env.PORT || config.server.port;
console.log('App started at port ' + port + '!');
app.listen(port);

