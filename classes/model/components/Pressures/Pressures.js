const { nextObjectKey } = require('../../../../utils/helpers');
const ModelCollectionComponent = require('../_Templates/ModelCollectionComponent');
const Pressure = require('./Pressure');

class Pressures extends ModelCollectionComponent {
	/**
	 * @description Creates an instance of the SkyCiv Pressures class.
	 * @extends ModelCollectionComponent
	 */
	constructor() {
		super();
	}

	/**
	 * @description Create a pressure with the next available ID.
	 * @method add
	 * @memberof Pressures
	 * @param {number} plate_id The plate to which the pressure is applied. Identified by the plate ID.
	 * @param {"global" | "local"} axes The axes in which the distributed load will be applied.
	 * @param {number} x_mag Magnitude of pressure in the x-direction of the specified axes, in the units of the pressure property of the units object.
	 * @param {number} y_mag Magnitude of pressure in the y-direction of the specified axes, in the units of the pressure property of the units object.
	 * @param {number} z_mag Magnitude of pressure in the z-direction of the specified axes, in the units of the pressure property of the units object.
	 * @param {string} load_group The load group to which this load belongs.
	 * @returns The ID of the created pressure.
	 */
	add(plate_id, axes = 'global', x_mag = 0, y_mag = 0, z_mag = 0, load_group = null) {
		const nextIndex = nextObjectKey(this);

		this[nextIndex] = new Pressure(plate_id, axes, x_mag, y_mag, z_mag, load_group);
		return nextIndex;
	}

	/**
	 * @description Find a pressure's ID from the plate ID which it is located.
	 * @method idFromPlateId
	 * @memberof Pressures
	 * @param {number} plate_id The plate ID of the pressure to find.
	 * @returns The ID of the pressure found.
	 */
	idFromPlateId(plate_id) {
		let found_id = null;

		Object.entries(this).forEach(([k, v]) => {
			if (v.plate_id === plate_id) {
				found_id = k;
			}
		});
		return found_id;
	}
}

module.exports = Pressures;
