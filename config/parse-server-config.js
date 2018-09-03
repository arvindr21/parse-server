module.exports = function(databaseUri) {

	const config = {
		databaseURI: databaseUri || 'mongodb://localhost:27017/parse',
		cloud: process.env.CLOUD_CODE_MAIN || __dirname + '/../cloud/main.js',
		appId: process.env.APP_ID || 'myAppId',
		masterKey: process.env.MASTER_KEY || 'myMasterKey', //Add your master key here. Keep it secret!
		readOnlyMasterKey: process.env.READ_ONLY_MASTER_KEY || 'myReadOnlyMasterKey', //Add your master key here. Keep it secret!
		serverURL: process.env.SERVER_URL || 'http://localhost:1337/parse', // Don't forget to change to https if needed
		liveQuery: {
			classNames: ["Posts", "Comments"] // List of classes to support for query subscriptions
		},
		appName: "My App",
		publicServerURL: process.env.SERVER_URL || 'http://localhost:1337/parse',
		verifyUserEmails: true,
		emailVerifyTokenValidityDuration: 2 * 60 * 60, // 2 hours
		preventLoginWithUnverifiedEmail: true,
		emailAdapter: {
			module: 'parse-server-sendmail-adapter',
			options: {
				// The address that your emails come from
				fromAddress: 'arvind.ravulavaru@gmail.com',
				// Verification email subject
				verificationSubject: 'Please verify your e-mail for %appname%',
				// Verification email body
				verificationBody: 'Hi,\n\nYou are being asked to confirm the e-mail address %email% with %appname%\n\nClick here to confirm it:\n%link%',
				// Password reset email subject
				passwordResetSubject: 'Password Reset Request for %appname%',
				// Password reset email body
				passwordResetBody: 'Hi,\n\nYou requested a password reset for %appname%.\n\nClick here to reset it:\n%link%'
			}
		}
	}

	return config;
}