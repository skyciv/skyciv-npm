class Member {
	/**
	 * @description Creates an instance of the SkyCiv Member class.
	 * @param {number} node_A The ID of the start node.
	 * @param {number} node_B The ID of the end node.
	 * @param {number} section_id The ID of the section that should be applied to the member.
	 * @param {string} fixity_A See docs for restraint code https://skyciv.com/api/v3/docs/s3d-model#restraint-code. Defaults to 'FFFFFF'.
	 * @param {string} fixity_B See docs for restraint code https://skyciv.com/api/v3/docs/s3d-model#restraint-code. Defaults to 'FFFFFF'.
	 * @param {"normal" | "normal_continuous" | "cable"} type Defaults to 'normal'.
	 * @param {number} cable_length Required only when type = cable. Defaults to null.
	 * @param {number} rotation_angle Rotation of the member about its own axis, in degrees.
	 * @param {number} offset_Ax The local x distance that the member is offset from its centroid at node A.
	 * @param {number} offset_Ay The local y distance that the member is offset from its centroid at node A.
	 * @param {number} offset_Az The local z distance that the member is offset from its centroid at node A.
	 * @param {number} offset_Bx The local x distance that the member is offset from its centroid at node B.
	 * @param {number} offset_By The local y distance that the member is offset from its centroid at node B.
	 * @param {number} offset_Bz The local z distance that the member is offset from its centroid at node B.
	 */
	constructor(
		node_A,
		node_B,
		section_id,
		fixity_A = 'FFFFFF',
		fixity_B = 'FFFFFF',
		type = 'normal',
		cable_length = null,
		rotation_angle = 0,
		offset_Ax = 0,
		offset_Ay = 0,
		offset_Az = 0,
		offset_Bx = 0,
		offset_By = 0,
		offset_Bz = 0
	) {
		this.node_A = node_A;
		this.node_B = node_B;
		this.section_id = section_id;
		this.fixity_A = fixity_A;
		this.fixity_B = fixity_B;
		this.type = type;
		this.cable_length = cable_length;
		this.rotation_angle = rotation_angle;
		this.offset_Ax = offset_Ax;
		this.offset_Ay = offset_Ay;
		this.offset_Az = offset_Az;
		this.offset_Bx = offset_Bx;
		this.offset_By = offset_By;
		this.offset_Bz = offset_Bz;
	}
}

module.exports = Member;
