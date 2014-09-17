
/**
 * Login Class
 */
function Login() {
	// sessionId -> user map
	this.sessionMap = {
		99999 : { name: 'Foo', email: 'foo@bar.com' }
	};
}
/**
 * Say Hello {name} to the user
 */
Login.prototype.hello = function(sessionId) {
	return 'Hello ' + this.sessionMap[sessionId].name + '\n';
};

/**
*create a new session id
*/
Login.prototype.generateSid = function(){
	return new Date().getTime();

};

/**
 * Check whether the given session id is valid (is in sessionMap) or not.
 */
Login.prototype.isLoggedIn = function(sessionId) {
	return sessionId in this.sessionMap;
};

/**
 * Create a new session id for the given user.
 */
Login.prototype.login = function(_name, _email) {
   /*
	* Generate unique session id and set it into sessionMap like foo@bar.com
	*/
	//var sessionId = new Date().getTime();
	var sessionId = this.generateSid();
	this.sessionMap[sessionId] = { name: _name, email: _email } 
	
	console.log('new session id ' + sessionId + ' for login::' + _email);
	
	return sessionId;
};

/**
*Refresh session id
*/


Login.prototype.sessionrefresh = function(_sessionId){
	var name = this.sessionMap[_sessionId].name;
	var email = this.sessionMap[_sessionId].email;
	console.log(name,email);
	var sessionId = this.generateSid();
	this.sessionMap[sessionId] = { name: name, email: email };
	var session = delete this.sessionMap[_sessionId];
	console.log('session id :: ' + sessionId  + this.sessionMap[sessionId].name  + this.sessionMap[sessionId].email);
};

/**
 * Logout from the server
 */ 
Login.prototype.logout = function(sessionId) {

	//var sessionid = this.sessionMap.Remove(sessionId);
	console.log('inside logout' + sessionId);
	
	var session = delete this.sessionMap[sessionId];
	
	//var session = sessionId in this.sessionMap;

   /*
	* TODO: Remove the given sessionId from the sessionMap
	*/
};

// Export the Login class
module.exports = new Login();
