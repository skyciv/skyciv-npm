const { nextObjectKey } = require('../../../../utils/helpers');
const ModelCollectionComponent = require('../_Templates/ModelCollectionComponent');
const DistributedLoad = require('./DistributedLoad');

class DistributedLoads extends ModelCollectionComponent {
	/**
	 * @description Creates an instance of the SkyCiv DistributedLoads class.
	 * @extends ModelCollectionComponent
	 */
	constructor() {
		super();
	}

	/**
	 * @description Create a distributed load with the next available ID.
	 * @method add
	 * @memberof DistributedLoads
	 * @param {number} member Member to which the distributed load will be applied. Identified by the member ID.
	 * @param {number} x_mag_A The magnitude of the load in the x-direction at the starting position A.
	 * @param {number} y_mag_A The magnitude of the load in the y-direction at the starting position A.
	 * @param {number} z_mag_A The magnitude of the load in the z-direction at the starting position A.
	 * @param {number} x_mag_B The magnitude of the load in the x-direction at the finish position B.
	 * @param {number} y_mag_B The magnitude of the load in the y-direction at the finish position B.
	 * @param {number} z_mag_B The magnitude of the load in the z-direction at the finish position B.
	 * @param {number} position_A Position along member where the distributed load starts. Expressed as a percentage.
	 * @param {number} position_B Position along member where the distributed load ends. Expressed as a percentage.
	 * @param {string} load_group The load group to which the load belongs.
	 * @param {"global" | "local"} axes The axes in which the distributed load will be applied.
	 * @returns The ID of the created distributed load.
	 */
	add(
		member,
		x_mag_A = 0,
		y_mag_A = 0,
		z_mag_A = 0,
		x_mag_B = 0,
		y_mag_B = 0,
		z_mag_B = 0,
		position_A = 0,
		position_B = 0,
		load_group = null,
		axes = 'global'
	) {
		const nextIndex = nextObjectKey(this);

		this[nextIndex] = new DistributedLoad(
			member,
			x_mag_A,
			y_mag_A,
			z_mag_A,
			x_mag_B,
			y_mag_B,
			z_mag_B,
			position_A,
			position_B,
			load_group,
			axes
		);
		return nextIndex;
	}

	/**
	 * @description Find a distributed load's ID from the member ID which it is located.
	 * @method idFromMemberId
	 * @memberof DistributedLoads
	 * @param {number} element_id The member ID of the distributed load to find.
	 */
	idFromMemberId(element_id) {
		let found_id = null;

		Object.entries(this).forEach(([k, v]) => {
			if (v.member === element_id) {
				found_id = k;
			}
		});
		return found_id;
	}
}

module.exports = DistributedLoads;
