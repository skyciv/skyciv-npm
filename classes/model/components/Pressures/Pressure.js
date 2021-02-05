class Pressure {
	/**
	 * @description Creates an instance of the SkyCiv Pressure class.
	 * @param {number} plate_id The plate to which the pressure is applied. Identified by the plate ID.
	 * @param {"global" | "local"} axes The axes in which the distributed load will be applied.
	 * @param {number} x_mag Magnitude of pressure in the x direction of the specified axes, in the units of the pressure property of the units object.
	 * @param {number} y_mag Magnitude of pressure in the y direction of the specified axes, in the units of the pressure property of the units object.
	 * @param {number} z_mag Magnitude of pressure in the z direction of the specified axes, in the units of the pressure property of the units object.
	 * @param {number} load_group The group to which this load belongs.
	 */
	constructor(plate_id, axes = 'global', x_mag = 0, y_mag = 0, z_mag = 0, load_group = null) {
		this.plate_id = plate_id;
		this.axes = axes;
		this.x_mag = x_mag;
		this.y_mag = y_mag;
		this.z_mag = z_mag;
		this.load_group = load_group;
	}
}

module.exports = Pressure;
