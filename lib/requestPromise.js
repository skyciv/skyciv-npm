const { clone } = require('../utils/helpers');

const current_API_version_endpoint = 3;
const allowableVersions = [2, 3];
const is_nodejs = typeof module !== 'undefined' && module.exports;

/**
 * Make a request using the SkyCiv API
 * @param {object} reqObject A SkyCiv API Object
 * @param {object} options Additional options
 * @param {2 | 3} options.version The API version to use. Defaults to 3.
 * @param {"http" | "https"} options.http_or_https Whethere the request should use http or https. Defaults to https.
 * @return A promise
 */
function requestPromise(apiObject, options = {}) {
	let reqObject = clone(apiObject);

	// Convert ApiObject class to JSON - Can't use instanceof as it will create a circular dependency.
	if (apiObject.__proto__.constructor.name === 'ApiObject') {
		reqObject = apiObject.get();
	}

	//  Input validation
	if (!options) options = {};

	// Check version
	if (!options.version) options.version = current_API_version_endpoint;
	if (!allowableVersions.includes(options.version))
		throw new Error(
			`options.version should be one of the following: ${allowableVersions.join(', ')}`
		);

	// Check transport method
	if (!options.http_or_https) options.http_or_https = 'https';

	// Check if already stringified
	if (typeof reqObject === 'object') {
		reqObject = JSON.stringify(reqObject);
	}

	// FOR NODE.JS
	if (is_nodejs) {
		var req_module;
		var req_port;

		if (options.http_or_https == 'https') {
			req_module = require('https');
			req_port = 8085; // 443;
		} else {
			req_module = require('http');
			req_port = 8086; // 80;
		}

		var req_options = {
			hostname: 'api.skyciv.com',
			port: req_port,
			path: '/v' + options.version + '',
			method: 'POST',
			headers: {
				// these are compulsory for it to work properly
				'Content-Type': 'application/json',
				'Content-Length': Buffer.byteLength(reqObject),
			},
			//timeout: timeout
		};

		return new Promise((resolve, reject) => {
			var req = req_module.request(req_options, function (res) {
				res.setEncoding('utf8');

				var res_data = '';
				res.on('data', function (chunk) {
					res_data += chunk;
				});

				res.on('end', function () {
					if (!res_data) {
						res_data = JSON.stringify({
							response: {
								status: 1,
								msg:
									'No response was received from the API. Please contact support@skyciv.com for more assistance with this.',
							},
						});
					}
					const parsed_res = JSON.parse(res_data);

					// Add the sessionId to the auth object if possible
					if (apiObject.__proto__.constructor.name === 'ApiObject') {
						if (parsed_res.hasOwnProperty('response')) {
							if (parsed_res.response.hasOwnProperty('last_session_id')) {
								apiObject.auth.session_id = parsed_res.response.last_session_id;
							}
						}
					}

					resolve(parsed_res);
				});
			});

			req.on('error', function (e) {
				reject('Problem with request: ' + e.message);
			});

			// Send the object as a JSON string
			req.write(reqObject);
			req.end();
		});
	} else {
		// FOR BROWSER

		return new Promise((resolve, reject) => {
			var req = new XMLHttpRequest();

			req.onreadystatechange = function () {
				if (req.readyState == XMLHttpRequest.DONE) {
					var response_obj;
					try {
						if (req.responseText) {
							response_obj = JSON.parse(req.responseText);
						} else {
							response_obj = {
								response: {
									status: 1,
									msg:
										'No response was received from the API. Please contact support@skyciv.com for more assistance with this.',
								},
							};
						}
					} catch (e) {
						response_obj = {
							response: {
								status: 2,
								msg:
									'There was an issue parsing the response from the API. Please contact support@skyciv.com for more assistance with this.',
							},
						};
					}

					if (typeof response_obj === 'string') {
						response_obj = JSON.parse(response_obj);
					}

					// Add the sessionId to the auth object if possible
					if (apiObject.__proto__.constructor.name === 'ApiObject') {
						if (response_obj.hasOwnProperty('response')) {
							if (response_obj.response.hasOwnProperty('last_session_id')) {
								apiObject.auth.session_id = response_obj.response.last_session_id;
							}
						}
					}

					resolve(response_obj);
				}
			};

			var req_port = '';
			if (options.http_or_https == 'https') {
				req_port = ':8085'; // 443;
			} else {
				req_port = ':8086'; // 80;
			}

			//req.timeout = timeout;
			req.open(
				'POST',
				options.http_or_https + '://api.skyciv.com' + req_port + '/v' + options.version,
				true
			); // true=async
			req.setRequestHeader('Content-type', 'application/json');
			req.send(reqObject);
		});
	}
}

module.exports = requestPromise;
