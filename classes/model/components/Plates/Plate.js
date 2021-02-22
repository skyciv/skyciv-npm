class Plate {
	/**
	 * @description Creates an instance of the SkyCiv Plate class.
	 * @param {number[]} [nodes] An array of node IDs that define the plate. At least 3 IDs are required.
	 * @param {number} thickness Plate thickness.
	 * @param {number} material_id The ID of the material to use for the plate.
	 * @param {number} rotZ Rotation about the z-axis.
	 * @param {"mindlin"} type Mindlin plates take into account shear deformations based on the Mindlin-Reissner Theory.
	 * @param {number} offset Offset of the plate along its local z-axis.
	 * @param {"stress" | "strain"} state Denotes whether the plate is in a state of plane stress or plane strain.
	 * @param {boolean} isMeshed Indicates whether the plate is already meshed.
	 */
	constructor(
		nodes,
		thickness,
		material_id,
		rotZ = 0,
		type = 'mindlin',
		offset = 0,
		state = 'stress',
		isMeshed = false
	) {
		this.nodes = nodes;
		this.thickness = thickness;
		this.material_id = material_id;
		this.rotZ = rotZ;
		this.type = type;
		this.offset = offset;
		this.state = state;
		this.isMeshed = isMeshed;
	}
}

module.exports = Plate;
