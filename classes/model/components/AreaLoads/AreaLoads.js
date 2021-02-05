const { nextObjectKey } = require('../../../../utils/helpers');
const ModelCollectionComponent = require('../_Templates/ModelCollectionComponent');
const AreaLoad = require('./AreaLoad');

class AreaLoads extends ModelCollectionComponent {
	/**
	 * @description Creates an instance of the SkyCiv AreaLoads class.
	 * @extends ModelCollectionComponent
	 */
	constructor() {
		super();
	}

	/**
	 * @description Create an area load with the next available ID.
	 * @method add
	 * @memberof AreaLoads
	 * @param {"one_way"|"two_way"|"column_wind_load"|"open_structure"} type How the area load should distribute the load.
	 * @param {number[]} nodes The IDs of the nodes which define the area for loading. Specify 3 or 4 values, in sequential order (clockwise or counterclockwise direction).
	 * @param {number} mag The magnitude of the load, in the units of pressure.
	 * @param {"X"|"Y"|"Z"} direction The direction of the load in the global axes.
	 * @param {string} elevations Relevant only if "type": "column_wind_load".The elevations between which the corresponding pressure magnitudes(see next row in this table) should be applied.This property should have 1 more value than the corresponding pressure magnitudes property.
	 * @param {string} mags Relevant only if "type": "column_wind_load".The magnitudes of pressures which should be applied between the corresponding elevations(see above row in this table).This property should have 1 less value than the corresponding elevations property.
	 * @param {string} column_direction Relevant only if "type": "one_way" or "type": "column_wind_load".The span direction of the applied area load.The values must be the IDs of 2 nodes which are in the nodes property.
	 * @param {"all"| "major"} loaded_members_axis Relevant only if "type": "open_structure".Whether to apply the open structure load to all members attaching to the nodes(indicated by all), or to only those members which lie along the global XYZ axes(indicated by major).
	 * @param {string} LG The load group to which this area load belongs.
	 */
	add(
		type,
		nodes,
		mag,
		direction,
		elevations = null,
		mags = null,
		column_direction = null,
		loaded_members_axis = null,
		LG = null
	) {
		const nextIndex = nextObjectKey(this);
		const elementIds = this.getAreaLoadIdsFromNodesIds(nodes);

		if (elementIds !== null) {
			console.warn('There is more than one area load with the same nodes.');
		}

		this[nextIndex] = new AreaLoad(
			type,
			nodes,
			mag,
			direction,
			elevations,
			mags,
			column_direction,
			loaded_members_axis,
			LG
		);
		return nextIndex;
	}

	/**
	 * @description OVERWRITES the area load with the ID provided. USE THE `.add()` METHOD TO SAFELY CREATE A AREA LOAD.
	 * @method set
	 * @memberof AreaLoads
	 * @param {number} id The ID of the area load.
	 * @param {"one_way"|"two_way"|"column_wind_load"|"open_structure"} type How the area load should distribute the load.
	 * @param {number[]} nodes The IDs of the nodes which define the area for loading. Specify 3 or 4 values, in sequential order (clockwise or counterclockwise direction).
	 * @param {number} mag The magnitude of the load, in the units of pressure.
	 * @param {"X"|"Y"|"Z"} direction The direction of the load in the global axes.
	 * @param {string} elevations Relevant only if "type": "column_wind_load".The elevations between which the corresponding pressure magnitudes(see next row in this table) should be applied.This property should have 1 more value than the corresponding pressure magnitudes property.
	 * @param {string} mags Relevant only if "type": "column_wind_load".The magnitudes of pressures which should be applied between the corresponding elevations(see above row in this table).This property should have 1 less value than the corresponding elevations property.
	 * @param {string} column_direction Relevant only if "type": "one_way" or "type": "column_wind_load".The span direction of the applied area load.The values must be the IDs of 2 nodes which are in the nodes property.
	 * @param {"all"| "major"} loaded_members_axis Relevant only if "type": "open_structure".Whether to apply the open structure load to all members attaching to the nodes(indicated by all), or to only those members which lie along the global XYZ axes(indicated by major).
	 * @param {string} LG The load group to which this area load belongs.
	 */
	set(
		id,
		type,
		nodes,
		mag,
		direction,
		elevations = null,
		mags = null,
		column_direction = null,
		loaded_members_axis = null,
		LG = null
	) {
		// Abort if no args
		if (!id) return;

		const elementIds = this.getAreaLoadIdsFromNodesIds(nodes);

		if (elementIds !== null) {
			console.warn('There is more than one area load with the same nodes.');
		}

		this[id] = new AreaLoad(
			type,
			nodes,
			mag,
			direction,
			elevations,
			mags,
			column_direction,
			loaded_members_axis,
			LG
		);
		return id;
	}

	/**
	 * @description Get the IDs of all area loads that match the provided nodes array. Node order IS considered.
	 * @method getAreaLoadIdsFromNodesIds
	 * @memberof AreaLoads
	 * @param {number[]} nodes An array of node IDs that define the area load. At least 3 IDs are required.
	 * @returns An array of member IDs or null if none exist.
	 */
	getAreaLoadIdsFromNodesIds(nodes) {
		let ids = [];
		Object.entries(this).forEach(([k, v]) => {
			if (v.nodes.toString() === nodes.toString()) {
				ids.push(k);
			}
		});
		ids = ids.length ? ids : null;
		return ids;
	}
}

module.exports = AreaLoads;
