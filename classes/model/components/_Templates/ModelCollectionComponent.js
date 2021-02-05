const { clone } = require('../../../../utils/helpers');

class ModelCollectionComponent {
	/**
	 * @class
	 * @description The base class for model collection components.
	 */
	constructor() {}

	/**
	 * @method get
	 * @description Get the data for one element or all elements of the object.
	 * @memberof ModelCollectionComponent
	 * @param {(number[] | number)} ids A single element ID or an array of element IDs to return.
	 * @returns All elements unless element IDs are provided.
	 */
	get(ids = null) {
		if (ids) {
			const data = {};
			if (Array.isArray(ids)) {
				// If an array of IDs is provided
				ids.forEach((id) => {
					id = String(id);
					if (this.hasOwnProperty(id)) {
						data[id] = clone(this[id]);
					}
				});
			} else {
				// If only a single ID is provided
				if (this.hasOwnProperty(ids)) {
					data[ids] = clone(this[ids]);
				}
			}
			return data;
		} else {
			// If no param is provided
			return clone(this);
		}
	}

	/**
	 * @method exists
	 * @description Check if an element exists.
	 * @memberof ModelCollectionComponent
	 * @param {number} id Element ID.
	 * @returns A boolean value whether the element exists.
	 */
	exists(id) {
		if (this.hasOwnProperty(id)) {
			return true;
		} else {
			return false;
		}
	}

	/**
	 * @method length
	 * @description Get the number of elements in the object.
	 * @memberof ModelCollectionComponent
	 * @returns The number of elements.
	 */
	length() {
		const elementIds = Object.keys(this);
		return elementIds.length;
	}

	/**
	 * @method clear
	 * @description Remove an element.
	 * @memberof ModelCollectionComponent
	 * @param {number} id The element ID to delete.
	 */
	clear(id) {
		if (this.hasOwnProperty(id)) {
			delete this[id];
		}
	}

	/**
	 * @method clearAll
	 * @description Removes all elements.
	 * @memberof ModelCollectionComponent
	 */
	clearAll() {
		Object.keys(this).forEach((k) => {
			delete this[k];
		});
	}
}

module.exports = ModelCollectionComponent;
