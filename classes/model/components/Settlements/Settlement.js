class Settlement {
	/**
	 * @description Creates an instance of the SkyCiv Settlement class.
	 * @param {number} node The ID of the node at which the settlement is applied.
	 * @param {number} tx Settlement displacement in the global x axis.
	 * @param {number} ty Settlement displacement in the global y axis.
	 * @param {number} tz Settlement displacement in the global z axis.
	 * @param {number} rx Settlement rotation about the global x axis.
	 * @param {number} ry Settlement rotation about the global y axis.
	 * @param {number} rz Settlement rotation about the global z axis.
	 */
	constructor(node, tx = null, ty = null, tz = null, rx = null, ry = null, rz = null) {
		this.node = node;
		this.tx = tx;
		this.ty = ty;
		this.tz = tz;
		this.rx = rx;
		this.ry = ry;
		this.rz = rz;
	}
}

module.exports = Settlement;
