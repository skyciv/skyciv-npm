const { nextObjectKey } = require('../../../../utils/helpers');
const ModelCollectionComponent = require('../_Templates/ModelCollectionComponent');
const Material = require('./Material');
const defaultMaterials = require('./DefaultMaterials');

class Materials extends ModelCollectionComponent {
	/**
	 * @description Creates an instance of the SkyCiv Materials class.
	 * @extends ModelCollectionComponent
	 */
	constructor() {
		super();
	}

	/**
	 * @description Create a custom material with the next available ID.
	 * @method addCustom
	 * @memberof Materials
	 * @param {string} name The name of the material.
	 * @param {number} density The density of the material.
	 * @param {number} elasticity_modulus The Modulus of Elasticity of the material.
	 * @param {number} poissons_ratio The Poisson's Ratio for the material.
	 * @param {number} yield_strength The Yield strength of the material.
	 * @param {number} ultimate_strength The Ultimate strength the material.
	 * @param {"steel"|"aluminium"|"masonry"|"concrete"|"wood"|"other"} _class The type of material.
	 * @returns The ID of the created material.
	 */
	addCustom(
		name,
		density,
		elasticity_modulus,
		poissons_ratio,
		yield_strength,
		ultimate_strength,
		_class
	) {
		const nextIndex = nextObjectKey(this);

		this[nextIndex] = new Material(
			name,
			density,
			elasticity_modulus,
			poissons_ratio,
			yield_strength,
			ultimate_strength,
			_class
		);
		return nextIndex;
	}

	/**
	 * @description Add a default material to the model.
	 * @method add
	 * @memberof Materials
	 * @param {"Structural Steel" | "Aluminium" | "Carbon Fibre Reinforced Plastic" | "Concrete" | "Concrete High Strength" | "Oakwood" | "Glass"} material The material name.
	 */
	add(material) {
		const name = defaultMaterials[material].name;
		const density = defaultMaterials[material].density;
		const elasticity_modulus = defaultMaterials[material].elasticity_modulus;
		const poissons_ratio = defaultMaterials[material].poissons_ratio;
		const yield_strength = defaultMaterials[material].yield_strength;
		const ultimate_strength = defaultMaterials[material].ultimate_strength;
		const _class = defaultMaterials[material].class;

		this.addCustom(
			name,
			density,
			elasticity_modulus,
			poissons_ratio,
			yield_strength,
			ultimate_strength,
			_class
		);
	}
}

module.exports = Materials;
