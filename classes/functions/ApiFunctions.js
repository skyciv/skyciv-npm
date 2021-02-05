const { clone } = require('../../utils/helpers');
const LoadCombinations = require('../model/components/LoadCombinations/LoadCombinations');
const PointLoads = require('../model/components/PointLoads/PointLoads');
const ApiFunction = require('./ApiFunction');

class ApiFunctions {
	/**
	 * @description Creates an instance of the SkyCiv ApiFunctions class.
	 */
	constructor() {
		this.functionList = [];
	}

	/**
	 * @method get
	 * @description Get the functions array.
	 * @memberof ApiFunctions
	 */
	get() {
		return clone(this.functionList);
	}

	/**
	 * @description Add a SkyCiv function to the ApiObject's functions list. See the docs for available functions and respective arguments. https://skyciv.com/api/v3/docs/the-request-object#functions
	 * @method add
	 * @memberof ApiFunctions
	 * @param {"S3D.session.start" | "S3D.model.set" | "S3D.model.get" | "S3D.model.repair" | "S3D.model.solve" | "S3D.model.takeScreenshot" | "S3D.model.mesh" | "S3D.results.set" | "S3D.results.get" | "S3D.results.fetchMemberResult" | "S3D.results.getAnalysisReport" | "S3D.model.takeScreenshot" | "S3D.design.member.getInput" | "S3D.design.member.check" | "S3D.design.member.optimize" | "standalone.member.check" | "S3D.design.rc.getInput" | "S3D.design.rc.check" | "S3D.SB.loadLibraryShape" | "S3D.SB.getLibraryTree" | "S3D.SB.buildCustomShape" | "S3D.SB.solve" | "S3D.SB.runGSD" | "S3D.file.save" | "S3D.file.open" | "S3D.file.share" | "S3D.file.getFileDirectory"} function_name The SkyCiv function name.
	 * @param {Object} args See the docs for the available arguments.
	 */
	add(function_name, args) {
		const fn = new ApiFunction(function_name, args);

		// Where there is an s3d_model, overwrite load_combinations with its get method it doesnt have the list prop.
		Object.entries(args).forEach(([argKey, argValue]) => {
			if (argKey === 's3d_model') {
				Object.entries(argValue).forEach(([k, v]) => {
					if (v instanceof LoadCombinations) {
						args.s3d_model.load_combinations = v.get();
					}
				});
			}
		});

		this.functionList.push(fn);
	}

	/**
	 * @description Remove all occurences of a SkyCiv function from the ApiObject's functions list. See the docs for available functions and respective arguments. https://skyciv.com/api/v3/docs/the-request-object#functions
	 * @method remove
	 * @memberof ApiFunctions
	 * @param {"S3D.session.start" | "S3D.model.set" | "S3D.model.get" | "S3D.model.repair" | "S3D.model.solve" | "S3D.model.takeScreenshot" | "S3D.model.mesh" | "S3D.results.set" | "S3D.results.get" | "S3D.results.fetchMemberResult" | "S3D.results.getAnalysisReport" | "S3D.model.takeScreenshot" | "S3D.design.member.getInput" | "S3D.design.member.check" | "S3D.design.member.optimize" | "standalone.member.check" | "S3D.design.rc.getInput" | "S3D.design.rc.check" | "S3D.SB.loadLibraryShape" | "S3D.SB.getLibraryTree" | "S3D.SB.buildCustomShape" | "S3D.SB.solve" | "S3D.SB.runGSD" | "S3D.file.save" | "S3D.file.open" | "S3D.file.share" | "S3D.file.getFileDirectory"} function_name The SkyCiv function name.
	 */
	remove(function_name) {
		const newList = this.functionList.filter((fn) => {
			fn.function !== function_name;
		});
		this.functionList = newList;
	}

	/**
	 * @description Remove all SkyCiv functions from the ApiObject's functions list. See the docs for available functions and respective arguments. https://skyciv.com/api/v3/docs/the-request-object#functions
	 * @method removeAll
	 * @memberof ApiFunctions
	 */
	removeAll() {
		this.functionList = [];
	}
}

module.exports = ApiFunctions;
