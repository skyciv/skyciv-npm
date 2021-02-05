class AreaLoad {
	/**
	 * @description Creates an instance of the SkyCiv AreaLoad class.
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
	constructor(
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
		this.type = type;
		this.nodes = nodes;
		this.mag = mag;
		this.direction = direction;
		this.elevations = elevations;
		this.mags = mags;
		this.column_direction = column_direction;
		this.loaded_members_axis = loaded_members_axis;
		this.LG = LG;
	}
}

module.exports = AreaLoad;
