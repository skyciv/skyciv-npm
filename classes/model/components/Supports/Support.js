class Support {
	/**
	 * @description Creates an instance of the SkyCiv Support class.
	 * @param {number} node The ID of the node at which the support is located.
	 * @param {string} restraint_code A 6 character restraint code. See docs for restraint code https://skyciv.com/api/v3/docs/s3d-model#restraint-code. Defaults to 'FFFFFF'.
	 * @param {number} tx Spring stiffness for translation in the x axis. Applies only if the restraint code character for translation in x = S.
	 * @param {number} ty Spring stiffness for translation in the y axis. Applies only if the restraint code character for translation in y = S.
	 * @param {number} tz Spring stiffness for translation in the z axis. Applies only if the restraint code character for translation in z= S.
	 * @param {number} rx Spring stiffness for rotation about the x axis. Applies only if the restraint code character for rotation about x = S.
	 * @param {number} ry Spring stiffness for rotation about the y axis. Applies only if the restraint code character for rotation about y = S.
	 * @param {number} rz Spring stiffness for rotation about the z axis. Applies only if the restraint code character for rotation about z = S.
	 */
	constructor(node, restraint_code = 'FFFFFF', tx = 0, ty = 0, tz = 0, rx = 0, ry = 0, rz = 0) {
		this.node = node;
		this.restraint_code = restraint_code ? restraint_code : 'FFFFFF';
		this.tx = tx;
		this.ty = ty;
		this.tz = tz;
		this.rx = rx;
		this.ry = ry;
		this.rz = rz;
	}
}

module.exports = Support;
