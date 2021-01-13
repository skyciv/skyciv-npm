# What is this?

A fast way to interact with the SkyCiv API.

## Usage

`npm i skyciv`

then...

### Require

```js
const skyciv = require('skyciv');
```

### Import

```js
import skyciv = from 'skyciv';
```

## Options

The options object takes:

* *version* - _2 | 3_ (Defaults to 3)
* *http_or_https* - _http | https_ (Defaults to https)

## Methods

### `skyciv.request(apiObject, callback?, options?)`
Make a request to the SkyCiv API. The callback function receives the parsed response.

```js
skyciv.request(API_OBJECT, function(res) {
    // Do something with results object "res"
}, options);
```

### `skyciv.requestPromise(apiObject, options?)`
Make a request to the SkyCiv API and receive a pending promise.

```js
async function reqProm() {
    const skycivResponse = await skyciv.requestPromise(API_OBJECT);
    // Do something with the response
}
```

## API Object
Visit the [API docs](https://skyciv.com/api/v3/docs/getting-started) for instructions on how to create a SkyCiv API object.

## Changelog

| Version  | Breaking          | Description     |
| :---     | :---              | :---            |
| 1.1.1    | false             | • README.md patch   |
| 1.1.0    | true (for nodejs) | • `skyciv.request()` now returns parsed JSON for node.js<br/>• Added `skyciv.requestPromise()`   |
| 1.0.1    | true              | • Changed `skyciv.skyciv.request()` to `skyciv.request()` |
| 1.0.0    | -                 | Initial release |