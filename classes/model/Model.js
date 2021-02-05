const { clone } = require('../../utils/helpers');
const Settings = require('./components/Settings/Settings');
const Nodes = require('./components/Nodes/Nodes');
const Members = require('./components/Members/Members');
const Plates = require('./components/Plates/Plates');
const MeshedPlates = require('./components/MeshedPlates/MeshedPlates');
const Sections = require('./components/Sections/Sections');
const Materials = require('./components/Materials/Materials');
const Supports = require('./components/Supports/Supports');
const Settlements = require('./components/Settlements/Settlements');
const PointLoads = require('./components/PointLoads/PointLoads');
const Moments = require('./components/Moments/Moments');
const DistributedLoads = require('./components/DistributedLoads/DistributedLoads');
const Pressures = require('./components/Pressures/Pressures');
const AreaLoads = require('./components/AreaLoads/AreaLoads');
const SelfWeight = require('./components/SelfWeight/SelfWeight');
const LoadCombinations = require('./components/LoadCombinations/LoadCombinations');

/**
 * @typedef SkyCivModelObject
 * @type {Object}
 * @memberof Model
 * @property {SettingsObject} settings
 * @property {Object} nodes
 * @property {Object} members
 * @property {Object} plates
 * @property {Object} meshed_plates
 * @property {Object} sections
 * @property {Object} materials
 * @property {Object} supports
 * @property {Object} settlements
 * @property {Object} point_loads
 * @property {Object} moments
 * @property {Object} distributed_loads
 * @property {Object} pressures
 * @property {Object} area_loads
 * @property {Object} member_prestress_loads
 * @property {Object} self_weight
 * @property {Object} load_combinations
 * @property {Object} load_cases
 * @property {Object} nodal_masses
 * @property {Object} nodal_masses_conversion_map
 * @property {Object} spectral_loads
 * @property {Object} groups
 */

class Model {
	/**
	 * @description Create an s3d_model object.
	 * @param {'metric' | 'imperial'} unit_system
	 * @param {"Y" | "Z"} vertical_axis Defaults to Y
	 * @example // Default for: metric | imperial:
	 * {
	 *  "length": "m" | 'ft',
	 *  "section_length": "mm" | 'in',
	 *  "material_strength": "mpa" | 'ksi',
	 *  "density": "kg/m3" | 'lb/ft3',
	 *  "force": "kn" | 'kip',
	 *  "moment": "kn-m" | 'kip-ft',
	 *  "pressure": "kpa" | 'ksf',
	 *  "mass": "kg" | 'kip',
	 *  "translation": "mm" | 'in',
	 *  "stress": "mpa" | 'ksi'
	 * }
	 */
	constructor(unit_system, vertical_axis = 'Y') {
		this.settings = new Settings(unit_system, vertical_axis);
		this.nodes = new Nodes();
		this.members = new Members();
		this.plates = new Plates();
		this.meshed_plates = new MeshedPlates();
		this.sections = new Sections();
		this.materials = new Materials();
		this.supports = new Supports();
		this.settlements = new Settlements();
		this.point_loads = new PointLoads();
		this.moments = new Moments();
		this.distributed_loads = new DistributedLoads();
		this.pressures = new Pressures();
		this.area_loads = new AreaLoads();
		this.member_prestress_loads = {};
		this.self_weight = new SelfWeight();
		this.load_combinations = new LoadCombinations();
		this.load_cases = {};
		this.nodal_masses = {};
		this.nodal_masses_conversion_map = {};
		this.spectral_loads = {};
		this.groups = [];
	}

	/**
	 * @method get
	 * @memberof Model
	 * @description Get the model in the format required by the SkyCiv API.
	 * @returns A SkyCiv model.
	 */
	get() {
		const s3d_model = clone(this);
		return s3d_model;
	}

	/**
	 * @method set
	 * @memberof Model
	 * @description Set individual properties of the model object.
	 * @param {SkyCivModelObject} model_object An object of key value pairs
	 * @example
	 * const model = new Model()
	 * model.set({
	 *  nodes: SkyCivNodesObject,
	 *  members: "SkyCivMembersObject"
	 * })
	 */
	set(model_object) {
		Object.entries(model_object).forEach(([k, v]) => {
			if (this.hasOwnProperty(k)) {
				this[k] = v;
			}
		});
	}
}

module.exports = Model;
