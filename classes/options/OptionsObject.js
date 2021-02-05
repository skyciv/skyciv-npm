class OptionsObject {
	/**
	 * @description Creates an instance of the SkyCiv OptionsObject class.
	 * @param {boolean} validate_input Verify the model input with SkyCiv's built in model validator.
	 * @param {boolean} response_data_only Only respond with data from the last function specified in the functions array.
	 */
	constructor(validate_input = true, response_data_only = false) {
		this.validate_input = validate_input;
		this.response_data_only = response_data_only;
	}
}

module.exports = OptionsObject;
