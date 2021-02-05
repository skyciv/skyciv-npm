/**
 * Create a deep clone of an object or array
 * @param {Object} object Any Object or Array
 */
function clone(object) {
	const clonedObject = JSON.parse(JSON.stringify(object));
	return clonedObject;
}

/**
 * Gets next available numerical key in an object starting from 1
 * @param {Object} object
 */
function nextObjectKey(object) {
	let nextKey = 1;
	const keys = Object.keys(object);

	while (keys.includes(String(nextKey))) {
		nextKey += 1;
	}
	return nextKey;
}

module.exports = {
	clone,
	nextObjectKey,
};
