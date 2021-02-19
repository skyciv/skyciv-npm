class Moment {
	/**
	 * @description Creates an instance of the SkyCiv Moment class
	 * @param {"n" | "m"} type The type of object to which the load is applied. node, member.
	 * @param {number} node The node ID which the moment is located. If type is "m", provide value null.
	 * @param {number} member The member ID which the moment is located. If type is "n", provide value null.
	 * @param {number} position The percentage from node_A to node_B of the member which the moment is located. E.g. 10 for 10%.  If type is "n", provide value null.
	 * @param {number} x_mag The magnitude of the moment about the x-axis. Positive = counter-clockwise, negative = clockwise.
	 * @param {number} y_mag The magnitude of the moment about the y-axis. Positive = counter-clockwise, negative = clockwise.
	 * @param {number} z_mag The magnitude of the moment about the z-axis. Positive = counter-clockwise, negative = clockwise.
	 * @param {string} load_group The load group to which the moment will be grouped.
	 * @example
	 * const nodeLoad = new Moment('n', 1, null, null, 0, -5, 0, 1);
	 * const memberLoad = new Moment('m', null, 3, 30, 0, -5, 0, 1);
	 */
	constructor(
		type,
		node = null,
		member = null,
		position = null,
		x_mag = 0,
		y_mag = 0,
		z_mag = 0,
		load_group = null
	) {
		this.type = type;
		this.node = node;
		this.member = member;
		this.position = position;
		this.x_mag = x_mag;
		this.y_mag = y_mag;
		this.z_mag = z_mag;
		this.load_group = load_group;
	}
}

module.exports = Moment;
