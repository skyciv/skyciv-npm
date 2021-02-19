class SelfWeight {
	/**
	 * @description Creates an instance of the SkyCiv SelfWeight class.
	 * @param {boolean} enabled If the self weight is applied to the model or not.
	 * @param {number} x Acceleration due to gravity in the x-axis, defined as a multiplier of the gravitational constant g.
	 * @param {number} y Acceleration due to gravity in the y-axis, defined as a multiplier of the gravitational constant g.
	 * @param {number} z Acceleration due to gravity in the z-axis, defined as a multiplier of the gravitational constant g.
	 */
	constructor(enabled, x, y, z) {
		this.enabled = enabled;
		this.x = x;
		this.y = y;
		this.z = z;
	}

	/**
	 * @description Enables self-weight with provided gravity multipliers.
	 * @memberof SelfWeight
	 * @param {number} x Acceleration due to gravity in the x-axis, defined as a multiplier of the gravitational constant g.
	 * @param {number} y Acceleration due to gravity in the y-axis, defined as a multiplier of the gravitational constant g.
	 * @param {number} z Acceleration due to gravity in the z-axis, defined as a multiplier of the gravitational constant g.
	 */
	enable(x, y, z) {
		this.enabled = true;
		this.x = x;
		this.y = y;
		this.z = z;
	}

	/**
	 * @description Disables self-weight
	 * @memberof SelfWeight
	 */
	disable() {
		this.enabled = false;
	}
}

module.exports = SelfWeight;
