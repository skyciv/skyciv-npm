const Units = require('./Units');

/**
 * @typedef SettingsObject
 * @type {Object}
 * @memberof Settings
 * @property {UnitsObject} units
 * @property {"fixed" | "exponential"} precision
 * @property {number} precision_values An integer from 1 to 15
 * @property {number} evaluation_points An integer from 3 to 50
 * @property {"Y" | "Z"} vertical_axis
 * @property {number} solver_timeout Any integer in seconds
 * @property {boolean} accurate_buckling_shape true | false
 * @property {boolean} buckling_johnson true | false
 * @property {number} non_linear_tolerance E.g. 1 = 1%
 * @property {"small" | "finite"} non_linear_theory
 * @property {boolean} auto_stabilize_model true | false
 * @property {"global" | "local"} member_offsets_axis
 */

class Settings {
	/**
	 * @description Create a settings object using the default values
	 * @param {'metric' | 'imperial'} unit_system
	 * @param {"Y" | "Z"} vertical_axis Defaults to Y
	 */
	constructor(unit_system, vertical_axis = 'Y') {
		this.units = new Units(unit_system);
		this.precision = 'fixed';
		this.precision_values = 3;
		this.evaluation_points = 9;
		this.vertical_axis = vertical_axis;
		this.solver_timeout = 600;
		this.accurate_buckling_shape = false;
		this.buckling_johnson = false;
		this.non_linear_tolerance = '1';
		this.non_linear_theory = 'small';
		this.auto_stabilize_model = false;
		this.member_offsets_axis = 'global';
	}

	/**
	 * @method set
	 * @memberof Settings
	 * @description Set individual properties of the settings object.
	 * @param {SettingsObject} settings_object An object of key value pairs.
	 * @example
	 * const settings = new SettingsObject();
	 * settings.set({
	 *  "vertical_axis": "Z",
	 *  "auto_stabilize_model": true
	 * })
	 */
	set(settings_object) {
		Object.entries(settings_object).forEach(([k, v]) => {
			if (this.hasOwnProperty(k)) {
				this[k] = v;
			}
		});
	}
}

module.exports = Settings;
