const { nextObjectKey } = require('../../../../utils/helpers');
const ModelCollectionComponent = require('../_Templates/ModelCollectionComponent');
const Moment = require('./Moment');

class Moments extends ModelCollectionComponent {
	/**
	 * @description Creates an instance of the SkyCiv Moments class.
	 * @extends ModelCollectionComponent
	 */
	constructor() {
		super();
	}

	/**
	 * @description Create a moment with the next available ID.
	 * @method add
	 * @memberof Moments
	 * @param {"n" | "m"} type The type of object to which the load is applied. node, member.
	 * @param {number} node The node ID which the moment is located. If type is "m", provide value null.
	 * @param {number} member The member ID which the moment is located. If type is "n", provide value null.
	 * @param {number} position The percentage from node_A to node_B of the member which the moment is located. E.g. 10 for 10%.  If type is "n", provide value null.
	 * @param {number} x_mag The magnitude of the moment about the x axis. Positive = counter-clockwise, negative = clockwise.
	 * @param {number} y_mag The magnitude of the moment about the y axis. Positive = counter-clockwise, negative = clockwise.
	 * @param {number} z_mag The magnitude of the moment about the z axis. Positive = counter-clockwise, negative = clockwise.
	 * @param {number} load_group The load group to which the moment will be grouped.
	 * @returns The ID of the created moment.
	 */
	add(
		type,
		node = null,
		member = null,
		position = null,
		x_mag = 0,
		y_mag = 0,
		z_mag = 0,
		load_group = null
	) {
		const nextIndex = nextObjectKey(this);
		const elementId =
			type === 'n' ? this.idFromElementId(type, node) : this.idFromElementId(type, member);

		this.verify(nextIndex, type, node, member);

		if (elementId !== null) {
			console.warn(
				'Prevented overwriting an existing moment with the Moments.add() method. Use Moments.set() instead.'
			);
			return elementId;
		} else {
			this[nextIndex] = new Moment(
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
	}

	/**
	 * @description OVERWRITES the moment with the ID provided. USE THE `.add()` METHOD TO SAFELY CREATE A MOMENT.
	 * @method set
	 * @memberof Moments
	 * @param {number} id The ID of the moment.
	 * @param {"n" | "m"} type The type of object to which the load is applied. node, member.
	 * @param {number} node The node ID which the moment is located. If type is "m", provide value null.
	 * @param {number} member The member ID which the moment is located. If type is "n", provide value null.
	 * @param {number} position The percentage from node_A to node_B of the member which the moment is located. E.g. 10 for 10%.  If type is "n", provide value null.
	 * @param {number} x_mag The magnitude of the moment about the x axis. Positive = counter-clockwise, negative = clockwise.
	 * @param {number} y_mag The magnitude of the moment about the y axis. Positive = counter-clockwise, negative = clockwise.
	 * @param {number} z_mag The magnitude of the moment about the z axis. Positive = counter-clockwise, negative = clockwise.
	 * @param {number} load_group The load group to which the moment will be grouped.
	 * @returns The ID of the created moment.
	 */
	set(
		id,
		type,
		node = null,
		member = null,
		position = null,
		x_mag = 0,
		y_mag = 0,
		z_mag = 0,
		load_group = null
	) {
		// Abort if no args
		if (!id) return;

		this.verify(id, type, node, member);

		this[id] = new Moment(type, node, member, position, x_mag, y_mag, z_mag, load_group);
		return id;
	}

	/**
	 * @description Find a moments's ID from the node ID which it is located.
	 * @method idFromElementId
	 * @memberof Moments
	 * @param {"n" | "m"} type The type of object to which the load is applied. node, member.
	 * @param {number} element_id The node or member ID of the moment to find.
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
	 * @memberof Moments
	 * @description Check if a node or member ID is provided depending on type="n"|"m".
	 * @private
	 * @param {number} loadIndex
	 * @param {"n"|"m"} type
	 * @param {number} node
	 * @param {number} member
	 */
	verify(loadIndex, type, node, member) {
		if (type === 'm' && !member && node) {
			console.warn(`A member ID was not provided for a moment (${loadIndex}) with type="m".`);
		}

		if (type === 'n' && !node) {
			console.warn(`A node ID was not provided for a moment (${loadIndex}) with type="n".`);
		}
	}
}

module.exports = Moments;
