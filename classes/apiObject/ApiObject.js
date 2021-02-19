const request = require('../../lib/request');
const requestPromise = require('../../lib/requestPromise');
const { clone } = require('../../utils/helpers');
const AuthObject = require('../auth/AuthObject');
const ApiFunctions = require('../functions/ApiFunctions');
const OptionsObject = require('../options/OptionsObject');

class ApiObject {
	/**
	 * @class
	 * @description Create an instance of the SkyCiv API Object.
	 */
	constructor() {
		this.auth = new AuthObject();
		this.options = new OptionsObject();
		this.functions = new ApiFunctions();
	}

	/**
	 * @description Send the ApiObject to the SkyCiv API.
	 * @memberof ApiObject
	 * @param {Function} callback The function to run after the request. Receives a parsed response.
	 * @param {"http" | "https"} http_or_https Whether the request should use http or https.
	 * @param {2 | 3} version The API version to use.
	 */
	request(callback, http_or_https = 'https', version = 3) {
		const interceptor = (res) => {
			// Try get last session ID
			if (res.response) {
				if (res.response.last_session_id) {
					this.auth.session_id = res.response.last_session_id;
				}
			}
			// Pass res onto user's callback
			callback(res);
		};

		request(this.get(), interceptor, { http_or_https, version });
	}

	/**
	 * @description Send the ApiObject to the SkyCiv API and receive a pending promise.
	 * @memberof ApiObject
	 * @param {"http" | "https"} http_or_https Whether the request should use http or https.
	 * @param {2 | 3} version The API version to use.
	 * @return A promise which resolve to a SkyCiv API response.
	 */
	requestPromise(http_or_https = 'https', version = 3) {
		// By passing this rather than this.get(), the requestPromise method handles adding the last_session_id to auth.
		return requestPromise(this, { version, http_or_https });
	}

	/**
	 * @description Converts the ApiObject into SkyCiv compatible JSON.
	 * @method get
	 * @memberof ApiObject
	 * @return A JavaScript object representing the ApiObeject in SkyCiv format.
	 */
	get() {
		const api_object = {
			auth: clone(this.auth),
			options: clone(this.options),
			functions: clone(this.functions.get()),
		};
		return api_object;
	}
}

module.exports = ApiObject;
