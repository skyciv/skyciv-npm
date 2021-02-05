const ModelCollectionComponent = require('../_Templates/ModelCollectionComponent');

/**
 * @typedef LoadCombinationObject
 * @type {Object}
 * @memberof LoadCombination
 * @description Apply factors to each load group. SW is required, all other properties added are optional but should match the load group names.
 * @property {number} SW Load factor for the Self Weight (SW) load group.
 * @example
 * const factors = {
 *     SW: 1,
 *     windCase: 1,
 *     liveLoad: 1.5
 * }
 */

class LoadCombination extends ModelCollectionComponent {
	/**
	 * @description Creates an instance of the SkyCiv LoadCombination class.
	 * @extends ModelCollectionComponent
	 * @param {LoadCombinationObject} combination_factors Key value pairs for the factors to apply to the load groups.
	 */
	constructor(name, combination_factors) {
		super();
		this.set(name, combination_factors);
	}

	/**
	 * @method set
	 * @memberof LoadCombination
	 * @description Set individual properties of the LoadCombination object.
	 * @param {string} name The name of the load combination.
	 * @param {LoadCombinationObject} combination_factors An object of key value pairs.
	 * @example
	 * const lc = new LoadCombination();
	 *
	 * const factors = {
	 *     SW: 1,
	 *     windCase: 1,
	 *     liveLoad: 1.5
	 * }
	 *
	 * lc.clearAll() // To remove any existing factors.
	 * lc.set(name, factors)
	 */
	set(name, combination_factors) {
		this.name = name;
		Object.entries(combination_factors).forEach(([k, v]) => {
			if (k === 'name') {
				throw new Error(
					"A load combination can not have the name 'name' as this is a reserved keyword."
				);
			} else {
				this[k] = v;
			}
		});
	}
}

module.exports = LoadCombination;
