class MeshedPlate {
	/**
	 * @description Creates an instance of the SkyCiv MeshedPlate class.
	 * @param {number} parent_plate The ID of the plate which this meshed plate originated from. Must refer to a plate in the plates object.
	 * @param {number} node_A The first node of the meshed plate.
	 * @param {number} node_B The second node of the meshed plate.
	 * @param {number} node_C The third node of the meshed plate.
	 * @param {number} node_D The fourth node of the meshed plate. Set this to null if the meshed plate is triangular.
	 * @param {number} rotZ Rotation of this plate about the plate's local Z axis, in degrees.
	 */
	constructor(parent_plate, node_A, node_B, node_C, node_D = null, rotZ = 0) {
		this.parent_plate = parent_plate;
		this.node_A = node_A;
		this.node_B = node_B;
		this.node_C = node_C;
		this.node_D = node_D;
		this.rotZ = rotZ;
	}
}

module.exports = MeshedPlate;
