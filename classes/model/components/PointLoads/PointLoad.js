class PointLoad {
	/**
	 * @description Creates an instance of the SkyCiv PointLoad class.
	 * @param {"n" | "m"} type The type of object to which the load is applied. node, member.
	 * @param {number} node The node ID which the point load is located. If type is "m", provide value null.
	 * @param {number} member The member ID which the point load is located. If type is "n", provide value null.
	 * @param {number} position The percentage from node_A to node_B of the member which the point load is located. E.g. 10 for 10%.  If type is "n", provide value null.
	 * @param {number} x_mag The magnitude of the point load force along the x axis.
	 * @param {number} y_mag The magnitude of the point load force along the y axis.
	 * @param {number} z_mag The magnitude of the point load force along the z axis.
	 * @param {number} load_group The load group to which the point load will be grouped.
	 * @example
	 * const nodeLoad = new PointLoad('n', 1, null, null, 0, -5, 0, 1);
	 * const memberLoad = new PointLoad('m', null, 3, 30, 0, -5, 0, 1);
	 */
	constructor(
		type,
		node = null,
		member = null,
		position = null,
		x_mag = 0,
		y_mag = 0,
		z_mag = 0,
		load_group = "LG1"
	) {
		this.type = type;
		if (node !== null) {
			this.node = node;
		}

		if (member !== null) {
			this.member = member;
		}
		this.position = position;
		this.x_mag = x_mag;
		this.y_mag = y_mag;
		this.z_mag = z_mag;
		this.load_group = load_group;
	}
}

module.exports = PointLoad;
