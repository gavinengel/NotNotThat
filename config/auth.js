// expose our config directly to our application using module.exports
module.exports = {

	'facebookAuth' : {
		'clientID' 		: '823631677658921', // your App ID
		'clientSecret' 	: '8011420a7b0b33aa1d80af645f145b74', // your App Secret
		'callbackURL' 	: 'http://kethle.com:8080/auth/facebook/callback'
	},

	'twitterAuth' : {       
		'consumerKey' 		: 'CL00hT1rQJ1ejLaEKJKcxksHt',
		'consumerSecret' 	: 'HalRfyJI2HWPgb2sBkM4BtreHhffFyE51Ivja2alwVwWnYLivr',
		'callbackURL' 		: 'http://127.0.0.1:8080/auth/twitter/callback'
	},

	'googleAuth' : {
		'clientID' 		: '581320313455-3qjgtaqg5p3eepgm5ijf2qfjnckncjqu.apps.googleusercontent.com',
		'clientSecret' 	: 'ZpzUcyDCjDAkZ_jklu7iUnal',
		'callbackURL' 	: 'http://kethle.com:8080/auth/google/callback'
	}

};
