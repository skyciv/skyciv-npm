class SelfWeight {
	/**
	 * @description Creates an instance of the SkyCiv SelfWeight class.
	 * @param {boolean} enabled If the self-weight is applied to the model or not.
	 * @param {number} x Acceleration due to gravity in the x-axis, defined as a multiplier of the gravitational constant g.
	 * @param {number} y Acceleration due to gravity in the y-axis, defined as a multiplier of the gravitational constant g.
	 * @param {number} z Acceleration due to gravity in the z-axis, defined as a multiplier of the gravitational constant g.
	 * @param {string} LG The load group that the self-weight belongs to.
	 */
	constructor(enabled = false, x = 0, y = 0, z = 0, LG = 'SW1') {
		this.enabled = enabled;
		this.x = x;
		this.y = y;
		this.z = z;
		this.LG = LG;
	}
	
	/**
	 * @description Enables self-weight with provided gravity multipliers.
	 * @memberof SelfWeight
	 * @param {number} x Acceleration due to gravity in the x-axis, defined as a multiplier of the gravitational constant g.
	 * @param {number} y Acceleration due to gravity in the y-axis, defined as a multiplier of the gravitational constant g.
	 * @param {number} z Acceleration due to gravity in the z-axis, defined as a multiplier of the gravitational constant g.
	 * @param {string} LG The load group that the self-weight belongs to. Defaults to existing value.
	 */
	enable(x = 0, y = 0, z = 0, LG=this.LG) {
		this.enabled = true;
		this.x = x;
		this.y = y;
		this.z = z;
		this.LG = LG
	}

	/**
	 * @description Disables the instance of self-weight.
	 * @memberof SelfWeight
	 */
	disable() {
		this.enabled = false;
	}
}

module.exports = SelfWeight;
