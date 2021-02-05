const { nextObjectKey } = require('../../../../utils/helpers');
const ModelCollectionComponent = require('../_Templates/ModelCollectionComponent');
const Settlement = require('./Settlement');

class Settlements extends ModelCollectionComponent {
	/**
	 * @description Creates an instance of the SkyCiv Settlements class.
	 * @extends ModelCollectionComponent
	 */
	constructor() {
		super();
	}

	/**
	 * @description Create a settlement with the next available ID.
	 * @method add
	 * @memberof Settlements
	 * @param {number} node The ID of the node at which the settlement is applied.
	 * @param {number} tx Settlement displacement in the global x axis.
	 * @param {number} ty Settlement displacement in the global y axis.
	 * @param {number} tz Settlement displacement in the global z axis.
	 * @param {number} rx Settlement rotation about the global x axis.
	 * @param {number} ry Settlement rotation about the global y axis.
	 * @param {number} rz Settlement rotation about the global z axis.
	 * @returns The ID of the created settlement.
	 */
	add(node, tx = null, ty = null, tz = null, rx = null, ry = null, rz = null) {
		const nextIndex = nextObjectKey(this);
		const elementId = this.idFromNodeId(node);

		if (elementId !== null) {
			console.warn(
				'Prevented overwriting an existing settlement with the Settlements.add() method. Use Settlements.set() instead.'
			);
			return elementId;
		} else {
			this[nextIndex] = new Settlement(node, tx, ty, tz, rx, ry, rz);
			return nextIndex;
		}
	}

	/**
	 * @description OVERWRITES the settlement with the ID provided. USE THE `.add()` METHOD TO SAFELY CREATE A SETTLEMENT.
	 * @method set
	 * @memberof Settlements
	 * @param {number} id The ID of the settlement.
	 * @param {number} node The ID of the node at which the settlement is applied.
	 * @param {number} tx Settlement displacement in the global x axis.
	 * @param {number} ty Settlement displacement in the global y axis.
	 * @param {number} tz Settlement displacement in the global z axis.
	 * @param {number} rx Settlement rotation about the global x axis.
	 * @param {number} ry Settlement rotation about the global y axis.
	 * @param {number} rz Settlement rotation about the global z axis.
	 * @returns The ID of the created settlement.
	 */
	set(id, node, tx = null, ty = null, tz = null, rx = null, ry = null, rz = null) {
		// Abort if no args
		if (!id) return;

		this[id] = new Settlement(node, tx, ty, tz, rx, ry, rz);
		return id;
	}

	/**
	 * @description Find an settlements's ID from the node ID which it is located.
	 * @method idFromNodeId
	 * @memberof Settlements
	 * @param {number} node_id The node ID of the settlement to find.
	 */
	idFromNodeId(node_id) {
		let id = null;
		Object.entries(this).forEach(([k, v]) => {
			if (v.node === node_id) {
				id = k;
			}
		});
		return id;
	}
}

module.exports = Settlements;
