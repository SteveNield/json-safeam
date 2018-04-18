var parseJson = require('./index.js');

const jsonStr = '{ "name": "john bonham", "occupation": "drummer" }';

let parsed = parseJson(jsonStr);

console.log(parsed);

const badJsonStr = '{ "a" "b":} }';

parsed = parseJson(badJsonStr);

console.log(parsed);
