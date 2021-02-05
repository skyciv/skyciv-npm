/**
 * @typedef UnitsObject
 * @type {Object}
 * @memberof Units
 * @property {"ft" | "in" | "mm" | "m"} length
 * @property {"in" | "mm"} section_length
 * @property {"ksi" | "psi" | "mpa"} material_strength
 * @property {"lb/ft3" | "kg/m3"} density
 * @property {"kip" | "lb" | "kn" | "n" | "kg"} force
 * @property {"kip-ft" | "lb-ft" | "lb-in" | "kn-m" | "n-m" | "kg-m"} moment
 * @property {"ksi" | "ksf" | "psi" | "psf" | "kpa" | "mpa" | "pa"} pressure
 * @property {"kip" | "lb" | "kg"} mass
 * @property {"mm" | "in"} translation
 * @property {"ksi" | "psi" | "mpa" | "kpa"} stress
 */

class Units {
	/**
	 * @description Create a units object using the default value for Metric or Imperial.
	 * @param {'metric' | 'imperial'} unit_system
	 * @param {UnitsObject} unitsObject
	 * @example
	 * // Default values for metric | imperial
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
	constructor(unit_system, unitsObject = null) {
		this.length = null;
		this.section_length = null;
		this.material_strength = null;
		this.density = null;
		this.force = null;
		this.moment = null;
		this.pressure = null;
		this.mass = null;
		this.translation = null;
		this.stress = null;

		this.setUnitSystem(unit_system);

		if (unitsObject) {
			this.set(unitsObject);
		}
	}

	/**
	 * @method setUnitSystem
	 * @memberof Units
	 * @description The units object using the default value for Metric or Imperial.
	 * @param {'metric' | 'imperial'} unit_system
	 * @example
	 * // Default values for metric | imperial
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
	setUnitSystem(unit_system) {
		unit_system === 'metric' ? this.setDefaultMetric() : this.setDefaultImperial();
	}

	/**
	 * @method setDefaultMetric
	 * @memberof Units
	 * @description Set the unit system to the default metric values.
	 * @example
	 * // Default values for metric
	 * {
	 *  "length": "m",
	 *  "section_length": "mm",
	 *  "material_strength": "mpa",
	 *  "density": "kg/m3",
	 *  "force": "kn",
	 *  "moment": "kn-m",
	 *  "pressure": "kpa",
	 *  "mass": "kg",
	 *  "translation": "mm",
	 *  "stress": "mpa"
	 * }
	 */
	setDefaultMetric() {
		this.length = 'm';
		this.section_length = 'mm';
		this.material_strength = 'mpa';
		this.density = 'kg/m3';
		this.force = 'kn';
		this.moment = 'kn-m';
		this.pressure = 'kpa';
		this.mass = 'kg';
		this.translation = 'mm';
		this.stress = 'mpa';
	}

	/**
	 * @method setDefaultImperial
	 * @memberof Units
	 * @description Set the unit system to the default metric values.
	 * @example
	 * // Default values for imperial
	 * {
	 * 	length: 'ft',
	 * 	section_length: 'in',
	 * 	material_strength: 'ksi',
	 * 	density: 'lb/ft3',
	 * 	force: 'kip',
	 * 	moment: 'kip-ft',
	 * 	pressure: 'ksf',
	 * 	mass: 'kip',
	 * 	translation: 'in',
	 * 	stress: 'ksi',
	 * }
	 */
	setDefaultImperial() {
		this.length = 'ft';
		this.section_length = 'in';
		this.material_strength = 'ksi';
		this.density = 'lb/ft3';
		this.force = 'kip';
		this.moment = 'kip-ft';
		this.pressure = 'ksf';
		this.mass = 'kip';
		this.translation = 'in';
		this.stress = 'ksi';
	}

	/**
	 * @method set
	 * @memberof Units
	 * @description Set individual properties of the units object. Imperial and Metric MUST NOT be mixed.
	 * @param {UnitsObject} unitsObject An object of key value pairs.
	 * @example
	 * const unitsObj = new UnitsObject{
	 *  "length": "mm",
	 *  "pressure": "kpa"
	 * }
	 */
	set(unitsObject) {
		Object.entries(unitsObject).forEach(([k, v]) => {
			if (this.hasOwnProperty(k)) {
				this[k] = v;
			}
		});
	}
}

module.exports = Units;
