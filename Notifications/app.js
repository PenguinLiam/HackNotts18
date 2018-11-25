/**Sends an SMS message to the specified recipient with information
 * of a request from the speficied user
 */
function sendMessage (userName, recipient) {
	// Create API object
	const Nexmo = require('nexmo')
	const nexmo = new Nexmo({
	  apiKey: 'INSERT_API_KEY_HERE',
	  apiSecret: 'INSERT_API_SERCRET_HERE'
	})

	// Message information
	const from = 'Liam' // Set to the name of the group later
	var text = userName + ' requested to join your hacking team'
	
	recipient = recipient.replace(/\s+/g, '')
	recipient = recipient.replace(/\+/g, '');

	nexmo.message.sendSms(from, recipient, text)
}


module.exports = sendMessage;
