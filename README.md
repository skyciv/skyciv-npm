# The SkyCiv NPM Package

This package provides helpful tools to create objects and interact with the SkyCiv API. These components can be used to quickly construct models by providing code completion, parameter information and examples.

<div style="text-align: center;">
    <img style="max-width: 800px" src="https://github.com/skyciv/skyciv-npm/raw/master/img/intellisense.png"/>
</div>

The SkyCiv API documentation can be found here: <a href="https://skyciv.com/api/v3/">https://skyciv.com/api/v3/</a>

The SkyCiv NPM package documentation can be found here: <a href="https://skyciv.com/api/v3/docs/packages/#npm---javascript">https://skyciv.com/api/v3/docs/packages/#npm---javascript</a>

## Install

```
npm i skyciv
```

## Example

The recommended use of this package is by using the `Model()` and `ApiObject()` classes.

```js
const skyciv = require('skyciv');

// Create an instance of a SkyCiv API Object and Model
const ao = new skyciv.ApiObject();
const model = new skyciv.Model('metric');

// Nodes
model.nodes.add(0, 0.5, 0);
model.nodes.add(0, 0, 0);
model.nodes.add(1, 0, 0);
model.nodes.add(1, 2, 0);
model.nodes.add(1.5, 0, 0);
model.nodes.add(1.75, 1, 0);
model.nodes.add(2, 2, 0);
model.nodes.add(2.25, 1, 0);
model.nodes.add(2.5, 0, 0);
model.nodes.add(2.5, 2, 0);
model.nodes.add(3, 0, 0);
model.nodes.add(3.5, 2, 0);
model.nodes.add(3.5, 0, 0);
model.nodes.add(3.75, 1, 0);
model.nodes.add(4, 2, 0);
model.nodes.add(4.25, 1, 0);
model.nodes.add(4.5, 0, 0);
model.nodes.add(6, 2, 0);
model.nodes.add(5, 2, 0);
model.nodes.add(5, 1, 0);
model.nodes.add(6, 1, 0);
model.nodes.add(6, 0, 0);
model.nodes.add(5, 0, 0);
model.nodes.add(7.5, 2, 0);
model.nodes.add(6.5, 2, 0);
model.nodes.add(6.5, 0, 0);
model.nodes.add(7.5, 0, 0);
model.nodes.add(8, 2, 0);
model.nodes.add(9, 2, 0);
model.nodes.add(9, 1, 0);
model.nodes.add(8, 1, 0);
model.nodes.add(8, 0, 0);
model.nodes.add(9, 0, 0);
model.nodes.add(9.5, 2, 0);
model.nodes.add(9.5, 0, 0);
model.nodes.add(10, 0, 0);
model.nodes.add(10, 1, 0);
model.nodes.add(10, 2, 0);
model.nodes.add(11, 2, 0);
model.nodes.add(11, 1, 0);
model.nodes.add(11.5, 2, 0);
model.nodes.add(12, 2, 0);
model.nodes.add(12.5, 2, 0);
model.nodes.add(12, 0, 0);
model.nodes.add(-0.5, -0.5, 0);
model.nodes.add(1, -0.5, 0);
model.nodes.add(3, -0.5, 0);
model.nodes.add(6, -0.5, 0);
model.nodes.add(9, -0.5, 0);
model.nodes.add(10, -0.5, 0);
model.nodes.add(12, -0.5, 0);
model.nodes.add(13, -0.5, 0);
model.nodes.add(10.5, 1, 0);
model.nodes.add(10, 1.5, 0);
model.nodes.add(10.5, 1.5, 0);
model.nodes.add(11, 1.5, 0);
model.nodes.add(10.5, 2, 0);

// Members
model.members.add(4, 3, 1);
model.members.add(3, 2, 1);
model.members.add(2, 1, 1);
model.members.add(5, 6, 1);
model.members.add(6, 7, 1);
model.members.add(7, 8, 1);
model.members.add(8, 9, 1);
model.members.add(6, 8, 1);
model.members.add(10, 11, 1);
model.members.add(11, 12, 1);
model.members.add(13, 14, 1);
model.members.add(14, 15, 1);
model.members.add(15, 16, 1);
model.members.add(16, 17, 1);
model.members.add(14, 16, 1);
model.members.add(18, 19, 1);
model.members.add(19, 20, 1);
model.members.add(20, 21, 1);
model.members.add(21, 22, 1);
model.members.add(22, 23, 1);
model.members.add(24, 25, 1);
model.members.add(25, 26, 1);
model.members.add(26, 27, 1);
model.members.add(28, 29, 1);
model.members.add(29, 30, 1);
model.members.add(30, 31, 1);
model.members.add(31, 32, 1);
model.members.add(31, 33, 1);
model.members.add(34, 35, 1);
model.members.add(36, 37, 1);
model.members.add(37, 54, 1);
model.members.add(54, 38, 1);
model.members.add(38, 57, 1);
model.members.add(57, 39, 1);
model.members.add(39, 56, 1);
model.members.add(56, 40, 1);
model.members.add(40, 53, 1);
model.members.add(37, 53, 1);
model.members.add(41, 42, 1);
model.members.add(42, 43, 1);
model.members.add(42, 44, 1);
model.members.add(45, 46, 2);
model.members.add(46, 47, 2);
model.members.add(47, 48, 2);
model.members.add(48, 49, 2);
model.members.add(49, 50, 2);
model.members.add(50, 51, 2);
model.members.add(51, 52, 2);

// Rigid links - null for section id
model.members.add(3, 46, null, 'FFFfff', 'FFFfff', 'rigid');
model.members.add(47, 11, null, 'FFFfff', 'FFFfff', 'rigid');
model.members.add(10, 7, null, 'FFFfff', 'FFFfff', 'rigid');
model.members.add(12, 15, null, 'FFFfff', 'FFFfff', 'rigid');
model.members.add(22, 26, null, 'FFFfff', 'FFFfff', 'rigid');
model.members.add(22, 48, null, 'FFFfff', 'FFFfff', 'rigid');
model.members.add(33, 35, null, 'FFFfff', 'FFFfff', 'rigid');
model.members.add(33, 49, null, 'FFFfff', 'FFFfff', 'rigid');
model.members.add(36, 50, null, 'FFFfff', 'FFFfff', 'rigid');
model.members.add(44, 51, null, 'FFFfff', 'FFFfff', 'rigid');

// Plates
const plate_id = model.plates.add([37, 40, 39, 38], 5, 1);
model.plates[plate_id].isMeshed = true;

// Meshed plates
model.meshed_plates.add(1, 37, 53, 55, 54);
model.meshed_plates.add(1, 53, 40, 56, 55);
model.meshed_plates.add(1, 54, 55, 57, 38);
model.meshed_plates.add(1, 55, 56, 39, 57);

// Sections
model.sections.addLibrarySection(skyciv.sections.Australian_Steel_300_Grade_SHS_Grade_350_65x3_SHS, 1);
model.sections.addLibrarySection(skyciv.sections.Australian_Steel_300_Grade_Universal_beams_410_UB_53_7, 1);

// Materials
// Provide a second parameter here to indicate if material should be imperial. 
model.materials.add('Structural Steel'); // If metric
// model.materials.add('Structural Steel', "imperial"); // If imperial
// model.materials.add('Structural Steel', model.settings.units.getUnitSystem()); // To use current model units

// Supports
model.supports.add(45, 'FFFffr');
model.supports.add(52, 'FFFffr');

// Point loads
// Enter null for member params where type 'n' is used.
// Enter null for node params where 'm' is used.
model.point_loads.add('n', 34, null, null, 0, -1, 0, 'LG1');
model.point_loads.add('m', null, 9, 50, 0, -0.7, 0, 'LG1');

// Moments - enter null for member params as type 'n' is used
model.moments.add('n', 28, null, null, 0, 0, -0.5, 'LG1');

// Distributed loads
model.distributed_loads.add(45, 0, -0.2, 0, 0, 0, 0, 0, 100, 'LG1');

// Pressures
model.pressures.add(1, 'global', 0, 0, 0.1, 'LG1');

// Area loads
model.area_loads.add('open_structure', [14, 16, 15], -1, 'Z', null, null, '14,16', 'all', 'LG1');

// Self-weight
model.self_weight.add(true, 0, -1, 0, 'SW1');

// Load combination
model.load_combinations.add('LC1', { SW1: 1, LG1: 0.8 });

// Set authentication
ao.auth.username = 'YOUR_SKYCIV_USERNAME';
ao.auth.key = 'YOUR_API_KEY';

// Set functions
ao.functions.add('S3D.session.start');
ao.functions.add('S3D.model.set', { s3d_model: model });
// ao.functions.add('S3D.model.solve', { analysis_type: 'linear' }); // Uncomment when model is functional
ao.functions.add('S3D.file.save', { path: 'api/NPM/', name: 'npm-js' });

// Callback to handle the response
const callback = (res) => console.log(res.response.msg);

// Make the request!
ao.request(callback);
```

Now, we can even view the model in [S3D](https://platform.skyciv.com/structural).
<div style="text-align: center;">
    <img style="max-width: 100%" src="https://github.com/skyciv/skyciv-npm/raw/master/img/result-in-s3d.png"/>
</div>

----

## Sections Database

Section library paths for all sections can be found in the `skyciv.sections` object.

For example:
```js
const path = skyciv.sections.Australian_Steel_300_Grade_Universal_beams_200_UB_18_2;

// path is now equal to:
["Australian", "Steel (300 Grade)", "Universal beams", "200 UB 18.2"]
```

This way, auto-completion helps to avoid looking up section paths manually.

<div style="text-align: center;">
    <img style="max-width: 800px" src="https://github.com/skyciv/skyciv-npm/raw/master/img/sections-autocomplete.png"/>
</div>

----

## Global Methods

### `skyciv.request(apiObject, callback?, options?)`
> **Note: We recommend using the `.request` method of the ApiObject class as seen in the above sample rather than these functions.**

Make a request to the SkyCiv API. The callback function receives the parsed response.

```js
const skyciv = require('skyciv');

const apiObject = {...}; // A custom built object
// or
const apiObject = new skyciv.ApiObject();

skyciv.request(apiObject, function(res) {
    // Do something with results object "res"
}, options);
```

### `skyciv.requestPromise(apiObject, options?)`
Make a request to the SkyCiv API and receive a pending promise.

```js
const skyciv = require('skyciv');
async function main() {
    
    const apiObject = {...}; // A custom built object
    // or
    const apiObject = new skyciv.ApiObject();

    // then
    const skycivResponse = await skyciv.requestPromise(apiObject);
    // Do something with the response
}

main();
```


## Manually building the API Object
Visit the [API docs](https://skyciv.com/api/v3/docs/getting-started) for instructions on how to create an instance of the SkyCiv API object.

## Changelog

| Version  | Breaking          | Description     |
| :---     | :---              | :---            |
| 2.0.0    | Breaks `model.plates`. | • Plates can now have additional attributes: `diaphragm`, `membrane_thickness`, `bending_thickness`, `shear_thickness`, `holes`. This may misalign inputs of existing plates.<br/>• `plate.type` now defaults to `"auto"`.
| 1.2.3    | false | • `Materials.add()` method now takes a second parameter for units. See sample above.
| 1.2.2    | Breaks `model.self_weight`. | • `Model().set` method now can now accept a downloaded JSON model from platform.skyciv.com/structural.<br/>• Fixed self_weight data structure.<br/>• `Functions` and `Function` class now defaults `args` to an empty object.|
| 1.2.1    | Breaks `skyciv.section` keys. | • Typos.<br/>• Improved in-code docs.<br/>• Removed special characters from keys in `skyciv.sections`.<br/>• Added `requestPromise()` method to the `ApiObject` class. <br/>• The `request()` and `requestPromise()` method of the `ApiObject()` will now automatically store the `last_session_id` to the `auth.session_id` property of the `ApiObject` instance.<br/>• Added `SelfWeight.enable()` and `SelfWeight.disable()` methods.<br/>• Made all `add()` methods return the ID of the new element. |
| 1.2.0    | false             | • Added 37 new classes including the ApiObject() and Model() classes.   |
| 1.1.1    | false             | • README.md patch.   |
| 1.1.0    | true (for nodejs) | • `skyciv.request()` now returns parsed JSON for node.js<br/>• Added `skyciv.requestPromise()`   |
| 1.0.1    | true              | • Changed `skyciv.skyciv.request()` to `skyciv.request()`. |
| 1.0.0    | -                 | Initial release. |