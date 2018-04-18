# json-safeam
Safe parser for JSON.  Takes a string argument which may or may not be a string representation of properly formatted JSON.  Returns an object containing a success flag, the raw string argument, and either the the parsed JSON object or an error.

## Installation
`npm install --save parse-safejson`

## Usage
```
var parseJson = require('parse-safejson');

const jsonStr = '{ "name": "john bonham", "occupation": "drummer" }';

const parsedJson = parseJson(jsonStr);

console.log(parsedJson);
//Output:
//{ 
//  res: { name: 'john bonham', occupation: 'drummer' },
//  raw: '{ "name": "john bonham", "occupation": "drummer" }',
//  success: true 
//}
```
