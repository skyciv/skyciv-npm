class Section {
	/**
	 * @description Creates an instance of the SkyCiv Section class.
	 * Following the creation of a new section object. Use one of the methods to create a section.
	 */
	constructor() {}

	/**
	 * @method clearSelf
	 * @memberof Section
	 * @description Delete all properties of the section.
	 */
	clearSelf() {
		Object.keys(this).forEach((k) => {
			delete this[k];
		});
	}

	/**
	 * @method loadSection
	 * @memberof Section
	 * @description Set the section from the SkyCiv section library.
	 * @param {string[]} [path] Provided as an array of 4 strings (see example below). It is the path of the section in the section library, obtained by inspection from within SkyCiv Section Builder or by attaining the library tree via S3D.SB.getLibraryTree.
	 * @param {number} material_id The ID of the material that is assigned to the section.
	 * @example
	 * const path = ["American", "AISC", "W shapes", "W14x22"]
	 */
	loadSection(path, material_id) {
		this.clearSelf();
		this.load_section = path;
		this.material_id = material_id;
	}

	/**
	 * @method loadCustom
	 * @memberof Section
	 * @description Set the section to a custom shape created in SkyCiv section builder.
	 * @param {string} name The name of a custom shape defined in SkyCiv Section Builder.
	 * @param {number} material_id The ID of the material that is assigned to the section.
	 */
	loadCustom(name, material_id) {
		this.clearSelf();
		this.load_custom = name;
		this.material_id = material_id;
	}
}

module.exports = Section;
