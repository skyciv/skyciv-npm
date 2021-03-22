class Plate {
	/**
	 * @description Creates an instance of the SkyCiv Plate class.
	 * @param {number[]} [nodes] An array of node IDs that define the plate. At least 3 IDs are required.
	 * @param {number} thickness Plate thickness.
	 * @param {number} material_id The ID of the material to use for the plate.
	 * @param {number} rotZ Rotation about the z-axis.
	 * @param {"auto"} type Auto will consider shear deformation when the plate thickness is sufficient.
	 * @param {number} offset Offset of the plate along its local z-axis.
	 * @param {"no" | "rigid"} diaphragm If the plate is a diaphragm.
	 * @param {number} membrane_thickness The membrane thickness to be used. Takes the value of thickness if null.
	 * @param {number} shear_thickness The shear thickness to be used. Takes the value of thickness if null.
	 * @param {number} bending_thickness The bending thickness to be used. Takes the value of thickness if null.
	 * @param {"stress" | "strain"} state Denotes whether the plate is in a state of plane stress or plane strain.
	 * @param {number[]} [holes] An array of node IDs. Used to define holes in the plate.
	 * @param {boolean} isMeshed Indicates whether the plate is already meshed.
	 */
	constructor(
		nodes,
		thickness,
		material_id,
		rotZ = 0,
		type = 'auto',
		offset = 0,
		diaphragm = 'no',
		membrane_thickness = null,
		shear_thickness = null,
		bending_thickness = null,
		state = 'stress',
		holes = null,
		isMeshed = false
	) {
		this.nodes = nodes;
		this.thickness = thickness;
		this.material_id = material_id;
		this.rotZ = rotZ;
		this.type = type;
		this.offset = offset;
		this.diaphragm = diaphragm;
		this.membrane_thickness = membrane_thickness;
		this.shear_thickness = shear_thickness;
		this.bending_thickness = bending_thickness;
		this.state = state;
		this.holes = holes;
		this.isMeshed = isMeshed;
	}
}

module.exports = Plate;
