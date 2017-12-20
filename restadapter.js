const request = require('request');
const config = require('config');
const OAuth2client = require('oauth2client')
let oauthMiddleware = function(req, res, next){
    let credentials = this.app.credentials;
    let app = this.app;
   
    this.TOKEN = credentials.token || ''
    api = apiDefaults(req, this.TOKEN)
    var that = this;
    console.log('api',api)
    request(api, function (err, response, body) {
        if (err) return next(err)
        if (typeof body === 'string' && isJSONResponse(response)) {
            try {
                body = JSON.parse(body);
            } catch (e) {
                err = e;
            }
        }
        //////////////////////////////////////

        //change for if token expired
        if (body && response.statusCode === 401 && body.code === '0031' || body.code === '0032') {
            console.log("@@@@@@@@@@ Calling To get New Token If token expired @@@@@@@@@@ ")
            // We initalize Oauth2OClient.Because from hw-site api is getting call asynchronously .If one Api got 401 then callging for getGrantAndToken.At the same time Second Api using same object of Ouaht2Cleient intiitlize this.Grant=undefined or this.Tokent=undefined according
            console.log(that.app.oauth2Client);
            var oauth2clientObject = {
                appId: config.oauth.appId,
                secretKey: config.oauth.secretKey,
                host: config.authServer.host,
                port: config.authServer.port,
                protocol: config.authServer.protocol
            }
            //In this case if Token expire then we pass prev Grant that time only request for new token
            if (body.code === '0031') {
                console.log('@@@@@ 1. Calling to only get Token @@@@@@@@@@@@');
                oauth2clientObject.GRANT = that.app.oauth2Client.GRANT;
            }
            //if this condition fails then Grant expired then request for grant and token
            var auth = new OAuth2client(oauth2clientObject);
            auth.getGrantAndToken(function (err, credentials) {

                // console.log("@@@@@@credentials"+credentials)
                if (err) next(err);
                if (credentials) {
                    that.app.credentials = credentials;
                    api.body = {};
                    oauthMiddleware.call({app: app },req, res, next)
                }

            }.bind(this));
        } else {
            return res.send(body);
        }
    })
}
module.exports = oauthMiddleware;
const isJSONResponse = function (response) {
    var contentType = response.headers['content-type'] || '';
    return contentType.indexOf('application/json') !== -1;
};
const apiDefaults = (req, TOKEN) => {
    let url = req.originalUrl;
    url = url.replace('/api', '');
    url = `${config.authServer.protocol}://${config.authServer.host}:${config.authServer.port}${url}`;
    var options = {
        url: url,
        headers: {
            'Authorization': TOKEN
        },
        method: req.method
    };
    console.log('METHOD',options.method)
    if (options.method == 'POST' || options.method == 'PUT') {
        options.json = true;
        options.body = req.body;
    }
    console.log('options',options)
    return options;
}