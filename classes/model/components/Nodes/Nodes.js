const { nextObjectKey } = require('../../../../utils/helpers');
const ModelCollectionComponent = require('../_Templates/ModelCollectionComponent');
const Node = require('./Node');

class Nodes extends ModelCollectionComponent {
	/**
	 * @description Creates an instance of the SkyCiv Nodes class.
	 * @extends ModelCollectionComponent
	 */
	constructor() {
		super();
	}

	/**
	 * @description Create a node with the next available ID.
	 * @method add
	 * @memberof Nodes
	 * @param {number} x The X coordinate of the node.
	 * @param {number} y The Y coordinate of the node.
	 * @param {number} z The Z coordinate of the node.
	 * @returns The ID of the created node.
	 */
	add(x, y, z) {
		const nextIndex = nextObjectKey(this);
		const nodeId = this.idFromCoords(x, y, z);

		if (nodeId !== null) {
			console.warn('Prevented overwriting an existing node with the Nodes.add() method.');
			return nodeId;
		} else {
			this[nextIndex] = new Node(x, y, z);
			return nextIndex;
		}
	}

	/**
	 * @description Find a node's ID from its coordinates.
	 * @method idFromCoords
	 * @memberof Nodes
	 * @param {number} x The x coordinate of the node whose ID to find.
	 * @param {number} y The y coordinate of the node whose ID to find.
	 * @param {number} z The z coordinate of the node whose ID to find.
	 * @returns The ID of the found node.
	 */
	idFromCoords(x, y, z) {
		let id = null;
		Object.entries(this).forEach(([k, v]) => {
			if (v.x === x && v.y === y && v.z === z) {
				id = k;
			}
		});
		return id;
	}
}

module.exports = Nodes;
