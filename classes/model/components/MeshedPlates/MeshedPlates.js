const { nextObjectKey } = require('../../../../utils/helpers');
const ModelCollectionComponent = require('../_Templates/ModelCollectionComponent');
const MeshedPlate = require('./MeshedPlate');

class MeshedPlates extends ModelCollectionComponent {
	/**
	 * @description Creates an instance of the SkyCiv MeshedPlates class.
	 * @extends ModelCollectionComponent
	 */
	constructor() {
		super();
	}

	/**
	 * @description Create a meshed plate with the next available ID.
	 * @method add
	 * @memberof MeshedPlates
	 * @param {number} parent_plate The ID of the plate which this meshed plate originated from. Must refer to a plate in the plates object.
	 * @param {number} node_A The first node of the meshed plate.
	 * @param {number} node_B The second node of the meshed plate.
	 * @param {number} node_C The third node of the meshed plate.
	 * @param {number} node_D The fourth node of the meshed plate. Set this to null if the meshed plate is triangular.
	 * @param {number} rotZ Rotation of this plate about the plate's local Z axis, in degrees.
	 */
	add(parent_plate, node_A, node_B, node_C, node_D = null, rotZ = 0) {
		const nextIndex = nextObjectKey(this);
		const elementIds = this.getMeshedPlateIdsFromNodesIds(node_A, node_B, node_C, node_D);

		if (elementIds !== null) {
			console.warn('There is more than one meshed plate with the same nodes.');
		}

		this[nextIndex] = new MeshedPlate(parent_plate, node_A, node_B, node_C, node_D, rotZ);
		return nextIndex;
	}

	/**
	 * @description Get the IDs of all meshed plates by corner nodes.
	 * @method getMeshedPlateIdsFromNodesIds
	 * @memberof MeshedPlates
	 * @param {number} node_A The ID of Node A.
	 * @param {number} node_B The ID of Node B.
	 * @param {number} node_C The ID of Node C.
	 * @param {number} node_D The ID of Node D.
	 * @returns An array of meshed plate IDs or null if none exist.
	 */
	getMeshedPlateIdsFromNodesIds(node_A, node_B, node_C, node_D = null) {
		let ids = [];
		Object.entries(this).forEach(([k, v]) => {
			if (
				v.node_A === node_A &&
				v.node_B === node_B &&
				v.node_C === node_C &&
				v.node_D === node_D
			) {
				ids.push(k);
			}
		});
		ids = ids.length ? ids : null;
		return ids;
	}
}

module.exports = MeshedPlates;
