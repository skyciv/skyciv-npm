class Node {
	/**
	 * @description Creates an instance of the SkyCiv Node class.
	 * @param {number} x The X coordinate of the node.
	 * @param {number} y The Y coordinate of the node.
	 * @param {number} z The Z coordinate of the node.
	 */
	constructor(x, y, z) {
		this.x = x;
		this.y = y;
		this.z = z;
	}
}

module.exports = Node;
