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
	 * @param {number} x_mag Magnitude of pressure in the x direction of the specified axes, in the units of the pressure property of the units object.
	 * @param {number} y_mag Magnitude of pressure in the y direction of the specified axes, in the units of the pressure property of the units object.
	 * @param {number} z_mag Magnitude of pressure in the z direction of the specified axes, in the units of the pressure property of the units object.
	 * @param {number} load_group The group to which this load belongs.
	 * @returns The ID of the created pressure.
	 */
	add(plate_id, axes = 'global', x_mag = 0, y_mag = 0, z_mag = 0, load_group = null) {
		const nextIndex = nextObjectKey(this);
		const elementId = this.idFromPlateId(plate_id);

		if (elementId !== null) {
			console.warn(
				'Prevented overwriting an existing pressure with the Pressures.add() method. Use Pressures.set() instead.'
			);
			return elementId;
		} else {
			this[nextIndex] = new Pressure(plate_id, axes, x_mag, y_mag, z_mag, load_group);
			return nextIndex;
		}
	}

	/**
	 * @description OVERWRITES the pressure with the ID provided. USE THE `.add()` METHOD TO SAFELY CREATE A PRESSURE.
	 * @method set
	 * @memberof Pressures
	 * @param {number} id The ID of the pressure.
	 * @param {number} plate_id The plate to which the pressure is applied. Identified by the plate ID.
	 * @param {"global" | "local"} axes The axes in which the distributed load will be applied.
	 * @param {number} x_mag Magnitude of pressure in the x direction of the specified axes, in the units of the pressure property of the units object.
	 * @param {number} y_mag Magnitude of pressure in the y direction of the specified axes, in the units of the pressure property of the units object.
	 * @param {number} z_mag Magnitude of pressure in the z direction of the specified axes, in the units of the pressure property of the units object.
	 * @param {number} load_group The group to which this load belongs.
	 * @returns The ID of the created pressure.
	 */
	set(id, plate_id, axes = 'global', x_mag = 0, y_mag = 0, z_mag = 0, load_group = null) {
		// Abort if no args
		if (!id) return;

		this[id] = new Pressure(plate_id, axes, x_mag, y_mag, z_mag, load_group);
		return id;
	}

	/**
	 * @description Find a pressures's ID from the plate ID which it is located.
	 * @method idFromPlateId
	 * @memberof Pressures
	 * @param {number} plate_id The plate ID of the pressure to find.
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
