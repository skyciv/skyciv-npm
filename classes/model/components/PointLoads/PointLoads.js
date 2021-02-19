const { nextObjectKey } = require('../../../../utils/helpers');
const ModelCollectionComponent = require('../_Templates/ModelCollectionComponent');
const PointLoad = require('./PointLoad');

class PointLoads extends ModelCollectionComponent {
	/**
	 * @description Creates an instance of the SkyCiv PointLoads class.
	 * @extends ModelCollectionComponent
	 */
	constructor() {
		super();
	}

	/**
	 * @description Create a point load with the next available ID.
	 * @method add
	 * @memberof PointLoads
	 * @param {"n" | "m"} type The type of object to which the load is applied. node, member.
	 * @param {number} node The node ID which the point load is located. If type is "m", provide value null.
	 * @param {number} member The member ID which the point load is located. If type is "n", provide value null.
	 * @param {number} position The percentage from node_A to node_B of the member which the point load is located. E.g. 10 for 10%.  If type is "n", provide value null.
	 * @param {number} x_mag The magnitude of the point load force along the x-axis.
	 * @param {number} y_mag The magnitude of the point load force along the y-axis.
	 * @param {number} z_mag The magnitude of the point load force along the z-axis.
	 * @param {string} load_group The load group to which the point load will be grouped.
	 * @returns The ID of the created point load.
	 */
	add(
		type,
		node = null,
		member = null,
		position = null,
		x_mag = 0,
		y_mag = 0,
		z_mag = 0,
		load_group = 'LG1'
	) {
		const nextIndex = nextObjectKey(this);

		this.verify(nextIndex, type, node, member);

		this[nextIndex] = new PointLoad(
			type,
			node,
			member,
			position,
			x_mag,
			y_mag,
			z_mag,
			load_group
		);
		return nextIndex;
	}

	/**
	 * @description Find a point load's ID from the node ID which it is located.
	 * @method idFromElementId
	 * @memberof PointLoads
	 * @param {"n" | "m"} type The type of object to which the load is applied. node, member.
	 * @param {number} element_id The node or member ID of the point load to find.
	 * @returns The ID of the found element.
	 */
	idFromElementId(type, element_id) {
		let found_id = null;

		const elements = Object.entries(this).filter(([k, v]) => {
			return v.type === type;
		});

		const key = type === 'n' ? 'node' : 'member';

		elements.forEach(([k, v]) => {
			if (v[key] === element_id) {
				found_id = k;
			}
		});
		return found_id;
	}

	/**
	 * @method verify
	 * @memberof PointLoads
	 * @description Check if a node or member ID is provided depending on type="n"|"m".
	 * @private
	 * @param {number} loadIndex
	 * @param {"n"|"m"} type
	 * @param {number} node
	 * @param {number} member
	 */
	verify(loadIndex, type, node, member) {
		if (type === 'm' && !member && node) {
			console.warn(
				`A member ID was not provided for a point load (${loadIndex}) with type="m".`
			);
		}

		if (type === 'n' && !node) {
			console.warn(
				`A node ID was not provided for a point load (${loadIndex}) with type="n".`
			);
		}
	}
}

module.exports = PointLoads;
