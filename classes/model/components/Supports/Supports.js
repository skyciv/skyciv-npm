const { nextObjectKey } = require('../../../../utils/helpers');
const ModelCollectionComponent = require('../_Templates/ModelCollectionComponent');
const Support = require('./Support');

class Supports extends ModelCollectionComponent {
	/**
	 * @description Creates an instance of the SkyCiv Supports class.
	 * @extends ModelCollectionComponent
	 */
	constructor() {
		super();
	}

	/**
	 * @description Create a support with the next available ID.
	 * @method add
	 * @memberof Supports
	 * @param {number} node The ID of the node at which the support is located.
	 * @param {string} restraint_code A 6 character restraint code. See docs for restraint code https://skyciv.com/api/v3/docs/s3d-model#restraint-code. Defaults to 'FFFFFF'.
	 * @param {number} tx Spring stiffness for translation in the x axis. Applies only if the restraint code character for translation in x = S.
	 * @param {number} ty Spring stiffness for translation in the y axis. Applies only if the restraint code character for translation in y = S.
	 * @param {number} tz Spring stiffness for translation in the z axis. Applies only if the restraint code character for translation in z= S.
	 * @param {number} rx Spring stiffness for rotation about the x axis. Applies only if the restraint code character for rotation about x = S.
	 * @param {number} ry Spring stiffness for rotation about the y axis. Applies only if the restraint code character for rotation about y = S.
	 * @param {number} rz Spring stiffness for rotation about the z axis. Applies only if the restraint code character for rotation about z = S.
	 * @returns The ID of the created support.
	 */
	add(
		node,
		restraint_code = 'FFFFFF',
		tx = 0,
		ty = 0,
		tz = 0,
		rx = 0,
		ry = 0,
		rz = 0
	) {
		const nextIndex = nextObjectKey(this);
		const elementId = this.idFromNodeId(node);

		if (elementId !== null) {
			console.warn(
				'Prevented overwriting an existing support with the Supports.add() method. Use Supports.set() instead.'
			);
			return elementId;
		} else {
			this[nextIndex] = new Support(node, restraint_code, tx, ty, tz, rx, ry, rz);
			return nextIndex;
		}
	}

	/**
	 * @description OVERWRITES the support with the ID provided. USE THE `.add()` METHOD TO SAFELY CREATE A SUPPORT.
	 * @method set
	 * @memberof Supports
	 * @param {number} id The ID of the support.
	 * @param {number} node The ID of the node at which the support is located.
	 * @param {string} restraint_code A 6 character restraint code. See docs for restraint code https://skyciv.com/api/v3/docs/s3d-model#restraint-code. Defaults to 'FFFFFF'.
	 * @param {number} tx Spring stiffness for translation in the x axis. Applies only if the restraint code character for translation in x = S.
	 * @param {number} ty Spring stiffness for translation in the y axis. Applies only if the restraint code character for translation in y = S.
	 * @param {number} tz Spring stiffness for translation in the z axis. Applies only if the restraint code character for translation in z= S.
	 * @param {number} rx Spring stiffness for rotation about the x axis. Applies only if the restraint code character for rotation about x = S.
	 * @param {number} ry Spring stiffness for rotation about the y axis. Applies only if the restraint code character for rotation about y = S.
	 * @param {number} rz Spring stiffness for rotation about the z axis. Applies only if the restraint code character for rotation about z = S.
	 * @returns The ID of the created support.
	 */
	set(
		id,
		node,
		restraint_code = 'FFFFFF',
		tx = 0,
		ty = 0,
		tz = 0,
		rx = 0,
		ry = 0,
		rz = 0
	) {
		// Abort if no args
		if (!id) return;

		this[id] = new Support(node, restraint_code, tx, ty, tz, rx, ry, rz);
		return id;
	}

	/**
	 * @description Find an supports's ID from the node ID which it is located.
	 * @method idFromNodeId
	 * @memberof Supports
	 * @param {number} node_id The node ID of the support to find.
	 */
	idFromNodeId(node_id) {
		let id = null;
		Object.entries(this).forEach(([k, v]) => {
			if (v.node === node_id) {
				id = k;
			}
		});
		return id;
	}
}


module.exports = Supports;
