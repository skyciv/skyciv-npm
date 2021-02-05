class AuthObject {
	/**
	 * @description Creates an instance of the SkyCiv AuthObject class.
	 * @param {string} username Your SkyCiv username.
	 * @param {string} key Your SkyCiv API key.
	 * @param {string} session_id The session_id. This package will automatically add this to the APIObject if you use the APIObject's .request() method.
	 */
	constructor(username = null, key = null, session_id = null) {
		this.username = username;
		this.key = key;
		this.session_id = session_id;
	}
}

module.exports = AuthObject;
