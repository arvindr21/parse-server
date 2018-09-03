var express = require('express');
var ParseServer = require('parse-server').ParseServer;
var ParseDashboard = require('parse-dashboard');
var path = require('path');

var databaseUri = process.env.DATABASE_URI || process.env.MONGODB_URI;

if (!databaseUri) {
	console.warn('DATABASE_URI not specified, falling back to localhost.');
}

var parseServerConfig = require('./config/parse-server-config.js')(databaseUri);
var parseDashConfig = require('./config/parse-dashboard-config.js')();

var api = new ParseServer(parseServerConfig);

var parseDBOpts = { allowInsecureHTTP: false };

var dashboard = new ParseDashboard(parseDashConfig, parseDBOpts);

var app = express();

// Serve static assets from the /public folder
app.use('/public', express.static(path.join(__dirname, '/public')));

// There will be a test page available on the /test path of your server url
// Remove this before launching your app
app.get('/test', function(req, res) {
	res.sendFile(path.join(__dirname, '/public/test.html'));
});

// Serve the Parse API on the /parse URL prefix
var mountPath = process.env.PARSE_MOUNT || '/parse';
app.use(mountPath, api);

// Serve dashboard as a home page application
app.use('/', dashboard);

var port = process.env.PORT || 1337;
var httpServer = require('http').createServer(app);

httpServer.listen(port, function() {
	console.log('parse-server-example running on port ' + port + '.');
});

// This will enable the Live Query real-time server
ParseServer.createLiveQueryServer(httpServer);