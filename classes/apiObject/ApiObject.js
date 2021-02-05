const request = require('../../lib/request');
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
	 * @param {Object} options Additional options.
	 * @param {2 | 3} options.version The API version to use.
	 * @param {"http" | "https"} options.http_or_https Whethere the request should use http or https.
	 */
	request(callback, http_or_https = 'https', version = 3) {
		request(this.get(), callback, { http_or_https, version });
	}

	/**
	 * @description Converts the ApiObject into SkyCiv compatible JSON.
	 * @method get
	 * @memberof ApiObject
	 *
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
