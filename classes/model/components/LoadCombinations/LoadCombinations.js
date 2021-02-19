const { clone, nextObjectKey } = require('../../../../utils/helpers');
const ModelCollectionComponent = require('../_Templates/ModelCollectionComponent');
const LoadCombination = require('./LoadCombination');
const { LoadCombinationObject } = require('./LoadCombination');

class LoadCombinations extends ModelCollectionComponent {
	/**
	 * @description Creates an instance of the SkyCiv LoadCombinations class.
	 * @extends ModelCollectionComponent
	 */
	constructor() {
		super();
	}

	/**
	 * @method add
	 * @description Adds a new load combination.
	 * @memberof LoadCombinations
	 * @param {string} name The name of the load combination.
	 * @param {LoadCombinationObject} combination_factors Key value pairs for the factors to apply to the load groups.
	 * @returns The ID of the created load combination.
	 * @example
	 * const lcs = new LoadCombinations();
	 *
	 * const factors = {
	 *     SW: 1,
	 *     windCase: 1,
	 *     liveLoad: 1.5
	 * }
	 *
	 * lcs.add("LC1", factors)
	 */
	add(name, combination_factors) {
		const nextIndex = nextObjectKey(this);

		this[nextIndex] = new LoadCombination(name, combination_factors);

		return nextIndex;
	}
}

module.exports = LoadCombinations;
