const { nextObjectKey } = require('../../../../utils/helpers');
const ModelCollectionComponent = require('../_Templates/ModelCollectionComponent');
const Member = require('./Member');

class Members extends ModelCollectionComponent {
	/**
	 * @description Creates an instance of the SkyCiv Members class.
	 * @extends ModelCollectionComponent
	 */
	constructor() {
		super();
	}

	/**
	 * @description Create a member with the next available ID.
	 * @method add
	 * @memberof Members
	 * @param {number} node_A The ID of the node at the beginning of the member.
	 * @param {number} node_B The ID of the node at the end of the member.
	 * @param {number} section_id The ID of the section to apply to the member.
	 * @param {string} fixity_A See docs for restraint code https://skyciv.com/api/v3/docs/s3d-model#restraint-code.
	 * @param {string} fixity_B See docs for restraint code https://skyciv.com/api/v3/docs/s3d-model#restraint-code.
	 * @param {"normal" | "normal_continuous" | "cable"} type The type of member.
	 * @param {number} cable_length Required only when type = cable.
	 */
	add(
		node_A,
		node_B,
		section_id,
		fixity_A = 'FFFFFF',
		fixity_B = 'FFFFFF',
		type = 'normal',
		cable_length = null
	) {
		const nextIndex = nextObjectKey(this);
		const elementIds = this.getMemberIdsFromNodesIds(node_A, node_B);

		if (elementIds !== null) {
			console.warn(
				'There is more than one member with the same end nodes. Ensure they have different offsets.'
			);
		}

		this[nextIndex] = new Member(
			node_A,
			node_B,
			section_id,
			fixity_A,
			fixity_B,
			type,
			cable_length
		);
		return nextIndex;
	}

	/**
	 * @description Get the IDs of all members by its end nodes.
	 * @method getMemberIdsFromNodesIds
	 * @memberof Members
	 * @param {number} node_A The ID of Node A.
	 * @param {number} node_B The ID of Node B.
	 * @returns An array of member IDs or null if none exist.
	 */
	getMemberIdsFromNodesIds(node_A, node_B) {
		let ids = [];
		Object.entries(this).forEach(([k, v]) => {
			if (v.node_A === node_A && v.node_B === node_B) {
				ids.push(k);
			}
		});
		ids = ids.length ? ids : null;
		return ids;
	}
}

module.exports = Members;
