const functions = require("firebase-functions");

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//


exports.helloWorld = functions.https.onRequest((request, response) => {
	functions.logger.info(`${JSON.stringify(Object.keys(request))}`);
	functions.logger.info(`${JSON.stringify(Object.keys(request.body))}`);
	functions.logger.info(`${JSON.stringify(Object.keys(request.query))}`);
	response.send(`${JSON.stringify(request.body)}`);
});
