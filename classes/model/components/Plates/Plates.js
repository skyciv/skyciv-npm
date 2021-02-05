const { nextObjectKey } = require('../../../../utils/helpers');
const ModelCollectionComponent = require('../_Templates/ModelCollectionComponent');
const Plate = require('./Plate');

class Plates extends ModelCollectionComponent {
	/**
	 * @description Creates an instance of the SkyCiv Plates class.
	 * @extends ModelCollectionComponent
	 */
	constructor() {
		super();
	}

	/**
	 * @description Create a plate with the next available ID.
	 * @method add
	 * @memberof Plates
	 * @param {number[]} nodes An array of node IDs that define the plate. At least 3 IDs are required.
	 * @param {number} thickness Plate thickness.
	 * @param {number} material_id The ID of the material to use for the plate.
	 * @param {number} rotZ Rotation about the Z axis.
	 * @param {"mindlin"} type Mindlin plates take into account shear deformations based on the Mindlin-Reissner Theory.
	 * @param {number} offset Offset of the plate along its local z-axis.
	 * @param {"stress" | "strain"} state Denotes whether the plate is in a state of plane stress or plane strain.
	 * @param {boolean} is_meshed Indicates whether the plate is already meshed.
	 */
	add(
		nodes,
		thickness,
		material_id,
		rotZ = 0,
		type = 'mindlin',
		offset = 0,
		state = 'stress',
		is_meshed = false
	) {
		const nextIndex = nextObjectKey(this);
		const elementIds = this.getPlateIdsFromNodesIds(nodes);

		if (elementIds !== null) {
			console.warn('There is more than one plate with the same nodes.');
		}

		this[nextIndex] = new Plate(
			nodes,
			thickness,
			material_id,
			rotZ,
			type,
			offset,
			state,
			is_meshed
		);
		return nextIndex;
	}

	/**
	 * @description Get the IDs of all plates that match the provided nodes array. Node order IS considered.
	 * @method getPlateIdsFromNodesIds
	 * @memberof Plates
	 * @param {number[]} nodes An array of node IDs that define the plate. At least 3 IDs are required.
	 * @returns An array of member IDs or null if none exist.
	 */
	getPlateIdsFromNodesIds(nodes) {
		let ids = [];
		Object.entries(this).forEach(([k, v]) => {
			if (v.nodes.toString() === nodes.toString()) {
				ids.push(k);
			}
		});
		ids = ids.length ? ids : null;
		return ids;
	}
}

module.exports = Plates;
