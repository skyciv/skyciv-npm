class DistributedLoad {
	/**
	 * @description  Creates an instance of the SkyCiv DistributedLoad class.
	 * @param {number} member Member to which the distributed load will be applied. Identified by the member ID.
	 * @param {number} x_mag_A Magnitude of load in x direction at the starting position A.
	 * @param {number} y_mag_A Magnitude of load in y direction at the starting position A.
	 * @param {number} z_mag_A Magnitude of load in z direction at the starting position A.
	 * @param {number} x_mag_B Magnitude of load in x direction at the finish position B.
	 * @param {number} y_mag_B Magnitude of load in y direction at the finish position B.
	 * @param {number} z_mag_B Magnitude of load in z direction at the finish position B.
	 * @param {number} position_A Position along member where the distributed load starts. Expressed as a percentage.
	 * @param {number} position_B Position along member where the distributed load ends. Expressed as a percentage.
	 * @param {number} load_group The load group to which the load belongs.
	 * @param {"global" | "local"} axes The axes in which the distributed load will be applied.
	 */
	constructor(
		member,
		x_mag_A = 0,
		y_mag_A = 0,
		z_mag_A = 0,
		x_mag_B = 0,
		y_mag_B = 0,
		z_mag_B = 0,
		position_A = 0,
		position_B = 0,
		load_group = null,
		axes = 'global'
	) {
		this.member = member;
		this.x_mag_A = x_mag_A;
		this.y_mag_A = y_mag_A;
		this.z_mag_A = z_mag_A;
		this.x_mag_B = x_mag_B;
		this.y_mag_B = y_mag_B;
		this.z_mag_B = z_mag_B;
		this.position_A = position_A;
		this.position_B = position_B;
		this.load_group = load_group;
		this.axes = axes;
	}
}

module.exports = DistributedLoad;
