module.exports = function() {

	const config = {
		"apps": [{
			"serverURL": process.env.SERVER_URL ||  "http://localhost:1337/parse",
			"appId": process.env.APP_ID || "myAppId",
			"masterKey": process.env.MASTER_KEY ||  "myMasterKey",
			"readOnlyMasterKey": process.env.READ_ONLY_MASTER_KEY ||  "myReadOnlyMasterKey",
			"appName": "MYAPP",
			"production": true
		}],
		"users": [{
			"user": "admin",
			"pass": "nimda",
			"apps": [{ "appId": "myAppId" }]
		}, {
			"user": "viewer",
			"pass": "reweiv",
			"apps": [{ "appId": "myAppId", "readOnly": true }]
		}],
		"trustProxy": true,
		"useEncryptedPasswords": false
	}

	return config;
}