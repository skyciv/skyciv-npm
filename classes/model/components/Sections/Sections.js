const { nextObjectKey } = require('../../../../utils/helpers');
const ModelCollectionComponent = require('../_Templates/ModelCollectionComponent');
const Section = require('./Section');

class Sections extends ModelCollectionComponent {
	/**
	 * @description Creates an instance of the SkyCiv Sections class.
	 * @extends ModelCollectionComponent
	 */
	constructor() {
		super();
	}

	/**
	 * @method addLibrarySection
	 * @memberof Sections
	 * @description Add a section from the SkyCiv section library.
	 * @param {string[]} path Provided as an array of 4 strings (see example below). It is the path of the section in the section library, obtained by inspection from within SkyCiv Section Builder or by attaining the library tree via S3D.SB.getLibraryTree.
	 * @param {number} material_id The ID of the material that is assigned to the section.
	 * @returns The ID of the created section.
	 * @example
	 * const sections = new Sections();
	 * sections.addLibrarySection(['Australian', 'Steel (300 Grade)', 'Universal beams', '200 UB 18.2'], 1);
	 * // or
	 * sections.addLibrarySection(skyciv.sections.Australian_Steel_300_Grade_Universal_beams_200_UB_18_2, 1);
	 */
	addLibrarySection(path, material_id) {
		const nextId = nextObjectKey(this);
		const newSection = new Section();
		newSection.loadSection(path, material_id);
		this[nextId] = newSection;
		return nextId;
	}

	/**
	 * @method addCustomSection
	 * @memberof Sections
	 * @description Add a custom section created in SkyCiv section builder.
	 * @param {string} name The name of a custom shape defined in SkyCiv Section Builder.
	 * @param {number} material_id The ID of the material that is assigned to the section.
	 * @returns The ID of the created section.
	 */
	addCustomSection(name, material_id) {
		const nextId = nextObjectKey(this);
		const newSection = new Section();
		newSection.loadCustom(name, material_id);
		this[nextId] = newSection;
		return nextId;
	}

	/**
	 * @description Get all sections that match a SkyCiv section library path.
	 * @method idsFromPath
	 * @memberof Sections
	 * @param {string[]} path Provided as an array of 4 strings (see example below). It is the path of the section in the section library, obtained by inspection from within SkyCiv Section Builder or by attaining the library tree via S3D.SB.getLibraryTree.
	 * @returns The IDs of the matched element.
	 * @example
	 * const path = ["American", "AISC", "W shapes", "W14x22"]
	 */
	idsFromPath(path) {
		let ids = [];
		Object.entries(this).forEach(([k, v]) => {
			if (v.path === path) {
				ids.push(k);
			}
		});
		if (!ids.length) ids = null;
		return ids;
	}
}

module.exports = Sections;
