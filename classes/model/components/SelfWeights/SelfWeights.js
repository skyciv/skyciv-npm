const { nextObjectKey } = require('../../../../utils/helpers');
const ModelCollectionComponent = require('../_Templates/ModelCollectionComponent');
const SelfWeight = require('./SelfWeight');

class SelfWeights extends ModelCollectionComponent {
	/**
	 * @description Creates an instance of the SkyCiv SelfWeights class.
	 * @extends ModelCollectionComponent
	 */
	constructor() {
		super();
	}

	/**
	 * @description Add an instance of self-weight.
	 * @memberof SelfWeights
	 * @param {number} x Acceleration due to gravity in the x-axis, defined as a multiplier of the gravitational constant g.
	 * @param {number} y Acceleration due to gravity in the y-axis, defined as a multiplier of the gravitational constant g.
	 * @param {number} z Acceleration due to gravity in the z-axis, defined as a multiplier of the gravitational constant g.
	 * @param {string} LG The load group that the self-weight belongs to. Defaults to existing value.
	 * @returns The ID of the newly created self-weight.
	 */
	add(enabled = true, x = 0, y = 0, z = 0, LG = 'SW1') {
		const nextIndex = nextObjectKey(this);

		this[nextIndex] = new SelfWeight(enabled, x, y, z, LG);
		return nextIndex;
	}

	/**
	 * @description Disables an instance of self-weight.
	 * @memberof SelfWeights
     * @param {number} id The ID of the self-weight to disable.
	 */
	disable(id = 1) {
		this[id].disable()
	}
}

module.exports = SelfWeights;
