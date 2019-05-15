# parse-safejson

![npm](https://img.shields.io/npm/v/parse-safejson.svg?style=flat-square)

JSON parser / deserializer using a safe, exception-free pattern.

Takes a string argument which may or may not be a string representation of properly formatted JSON.  Returns an object containing a success flag, the raw string argument, and either the the parsed JSON object or an error.

## Installation
`npm install --save parse-safejson`

## Usage
```javascript
var parseJson = require('parse-safejson');

const jsonStr = '{ "name": "john bonham", "occupation": "drummer" }';

console.log(parseJson(jsonStr));

// >> Output:
// >> {
// >>   res: { name: 'john bonham', occupation: 'drummer' },
// >>   raw: '{ "name": "john bonham", "occupation": "drummer" }',
// >>   success: true
// >> }

const badJsonStr = '{ "a" "b":} }';

console.log(parseJson(badJsonStr));

// >> Output:
// >> {
// >>   err: SyntaxError: Unexpected string in JSON at position 6
// >>     at JSON.parse (<anonymous>)
// >>     at module.exports (x\xxxxxxxxxxxxxxxxx\xxxxxxxxxxxx\xxxxxxxxx.js:4:17)
// >>     at Object.<anonymous> (x\xxxxxxxxxxxxxxxxx\xxxxxxxxxxxx\xxxxxxxxx.js:11:10)
// >>     at Module._compile (module.js:643:30)
// >>     at Object.Module._extensions..js (module.js:654:10)
// >>     at Module.load (module.js:556:32)
// >>     at tryModuleLoad (module.js:499:12)
// >>     at Function.Module._load (module.js:491:3)
// >>     at Function.Module.runMain (module.js:684:10)
// >>     at startup (bootstrap_node.js:187:16),
// >>   raw: '{ "a" "b":} }',
// >>   success: false
// >> }

```

## Tests
```
npm install
npm test
```
