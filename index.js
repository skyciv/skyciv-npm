const apiComponents = {
	AuthObject: require('./classes/auth/AuthObject'),
	OptionsObject: require('./classes/options/OptionsObject'),
	ApiFunctions: require('./classes/functions/ApiFunctions'),
	ApiFunction: require('./classes/functions/ApiFunction'),
};

const functions = {
	/* 
	Add individual functions here later so user can do something like this:
	const newFn = skyciv.functions.s3d_start_session(keep_open?)
	*/
};

const modelComponent = {
	AreaLoad: require('./classes/model/components/AreaLoads/AreaLoad'),
	AreaLoads: require('./classes/model/components/AreaLoads/AreaLoads'),
	DistributedLoad: require('./classes/model/components/DistributedLoads/DistributedLoad'),
	DistributedLoads: require('./classes/model/components/DistributedLoads/DistributedLoads'),
	LoadCombination: require('./classes/model/components/LoadCombinations/LoadCombination'),
	LoadCombinations: require('./classes/model/components/LoadCombinations/LoadCombinations'),
	Material: require('./classes/model/components/Materials/Material'),
	Materials: require('./classes/model/components/Materials/Materials'),
	Member: require('./classes/model/components/Members/Member'),
	Members: require('./classes/model/components/Members/Members'),
	MeshedPlate: require('./classes/model/components/MeshedPlates/MeshedPlate'),
	MeshedPlates: require('./classes/model/components/MeshedPlates/MeshedPlates'),
	Moment: require('./classes/model/components/Moments/Moment'),
	Moments: require('./classes/model/components/Moments/Moments'),
	Node: require('./classes/model/components/Nodes/Node'),
	Nodes: require('./classes/model/components/Nodes/Nodes'),
	Plate: require('./classes/model/components/Plates/Plate'),
	Plates: require('./classes/model/components/Plates/Plates'),
	PointLoad: require('./classes/model/components/PointLoads/PointLoad'),
	PointLoads: require('./classes/model/components/PointLoads/PointLoads'),
	Pressure: require('./classes/model/components/Pressures/Pressure'),
	Pressures: require('./classes/model/components/Pressures/Pressures'),
	Section: require('./classes/model/components/Sections/Section'),
	Sections: require('./classes/model/components/Sections/Sections'),
	SelfWeight: require('./classes/model/components/SelfWeight/SelfWeight'),
	Units: require('./classes/model/components/Settings/Units'),
	Settings: require('./classes/model/components/Settings/Settings'),
	Settlement: require('./classes/model/components/Settlements/Settlement'),
	Settlements: require('./classes/model/components/Settlements/Settlements'),
	Support: require('./classes/model/components/Supports/Support'),
	Supports: require('./classes/model/components/Supports/Supports'),
};

module.exports = {
	request: require('./lib/request'),
	requestPromise: require('./lib/requestPromise'),
	ApiObject: require('./classes/apiObject/ApiObject'),
	Model: require('./classes/model/Model'),
	apiComponents,
	sections: require('./lib/sectionsLibrary'),
	// functions,
	modelComponent,
};
