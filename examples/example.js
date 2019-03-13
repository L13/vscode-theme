//	Imports ____________________________________________________________________

var path = require('path'),
	fs = require("fs"),
	slice = Array.prototype.slice;

const stringify = JSON.stringify;
const parse = JSON.parse;
const random = Math.random;
let test = parse(stringify(null));

//	Variables __________________________________________________________________

var str = 'string\n\t'
	+ 'string2'
	+ 'string3',
	
	num = 0,
	bool = true,
	empty = null,
	object = {
		name: null,
		'nameA': null,
		"nameB": null
	},
	array = [
		1,
		2,
		3
	],
	regexp = /^test(1)?\w|\s(?:hello)[1-9]+(?:asd)$/g,
	date = new Date,
	obj = new Object,
	func = (arg1, arg2) => {
		
		console.log(arg1, arg2);
		
	};

//	Initialize _________________________________________________________________

if ([] instanceof String) console.log(0);

if (true === false || false !== false) {
	console.log(1);
	// ...
}

if (true === false || false !== false) console.log(1);
else console.log(2);

if (true === false || false !== false) {
	console.log(1);
	// ...
} else console.log(2);

if (true === false || false !== false) {
	console.log(1);
	// ...
} else {
	console.log(2);
	// ...
}

for (var i = 0; i < array.length; i++) {
	typeof array[i];
}

while (false) {
	// Do something
}

do {
	// Do something
} while (false);

try {
	delete object.name;
} catch (error) {
	
}

name(null);

//	Exports ____________________________________________________________________

module.exports = exports = function () {
	
	arguments.length;
	
};

exports.test = function (arg1) {
	
	return arg1;
	
};

//	Functions __________________________________________________________________

/*
	Multiline comment
*/

function name (arg1) {
	
	this.length;
	
	return false;
	
}