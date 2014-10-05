// expose our config directly to our application using module.exports
module.exports = {

	'facebookAuth' : {
		'clientID' 		: '325329004339288', // your App ID
		'clientSecret' 	: '1fd65712b217a176ca280e479b1e3b65', // your App Secret
		'callbackURL' 	: 'http://kethle.com/auth/facebook/callback'
	},

	'twitterAuth' : {       
		'consumerKey' 		: 'CL00hT1rQJ1ejLaEKJKcxksHt',
		'consumerSecret' 	: 'HalRfyJI2HWPgb2sBkM4BtreHhffFyE51Ivja2alwVwWnYLivr',
		'callbackURL' 		: 'http://kethle.com/auth/twitter/callback'
	},

	'googleAuth' : {
		'clientID' 		: '581320313455-3qjgtaqg5p3eepgm5ijf2qfjnckncjqu.apps.googleusercontent.com',
		'clientSecret' 	: 'ZpzUcyDCjDAkZ_jklu7iUnal',
		'callbackURL' 	: 'http://kethle.com/auth/google/callback'
	}

};
