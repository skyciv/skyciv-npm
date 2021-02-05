class Material {
	/**
	 * @description Creates an instance of the SkyCiv Material class.
	 * @param {string} name The name of the material.
	 * @param {number} density The density of the material.
	 * @param {number} elasticity_modulus The Modulus of Elasticity of the material.
	 * @param {number} poissons_ratio The Poisson's Ratio for the material.
	 * @param {number} yield_strength The Yield strength of the material.
	 * @param {number} ultimate_strength The Ultimate strength the material.
	 * @param {"steel"|"aluminium"|"masonry"|"concrete"|"wood"|"other"} _class The type of material.
	 */
	constructor(
		name,
		density,
		elasticity_modulus,
		poissons_ratio,
		yield_strength,
		ultimate_strength,
		_class
	) {
		this.name = name;
		this.density = density;
		this.elasticity_modulus = elasticity_modulus;
		this.poissons_ratio = poissons_ratio;
		this.yield_strength = yield_strength;
		this.ultimate_strength = ultimate_strength;
		this.class = _class;
	}
}

module.exports = Material;
