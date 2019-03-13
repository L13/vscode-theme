//	Imports ____________________________________________________________________

import * as run from './example';

const slice = Array.prototype.slice;

const stringify = JSON.stringify;
const parse = JSON.parse;

//	Variables __________________________________________________________________

var str:string = 'string\n\t\'huhu\'huhu'
	+ "string2\n\t\"huhu\"huhu"
	+ `string3\n\t${5 + 'huhu' + [] + name}`;
		
let num:number = 0;
let bool:boolean = true;
let empty:any = null;
let object:{ name:string, nameA:string, nameB:string } = {
	name: null,
	'nameA': null,
	"nameB": null,
};
let objectA:object = { ...object, nameC: null };
let objectB:object = { nameC: null, ...object };
let objectC:object = { ...objectA, ...objectB };

console.log(run.test);
	
let array:number[] = [
	1,
	2,
	3
];
const [a, b, c] = array;
const copyA = [0, 1, ...array];
const copyB = [...array, 1, 2];
const copyC = [...copyA, ...copyB];
	
let regexp:RegExp = /^test(1)?\w|\s(?:hello)[1-9]+(?:asd)$/g;

let date:Date = new Date();

const func:Function = (arg1:string, arg2:number) => {
	
	console.log(date, arg1, arg2);
	
};

enum Enums { Red = 1, Blue };

const bar:Object = {};

//	Initialize _________________________________________________________________

bool = true;
bool = false;

num + num;
num - num;
num * num;
num / num;
num % num;

num++;
num--;

num = num;
num += num;
num -= num;
num *= num;
num /= num;
num %= num;

num === num;
num !== num;

num < num;
num <= num;
num > num;
num >= num;

num ? num : num;

num && num;
num || num;

!num;
(num);

delete num['a'];
num in {};
[] instanceof Array;
typeof num;
void num;

num <<= num;
num >>= num;
num >>>= num;
num &= num;
num |= num;
num ^= num;
num & num;
num | num;
num ^ num;
~num;
num << num;
num >> num;
num >>> num;

num = 0xff;
num = 0xFF;

num = 1e5;
num = 1e-5;

if ([] instanceof String) console.log(0);

if (true === true || false !== false) {
	console.log(1);
	// ...
}

if (true === true || false !== false) console.log(1);
else console.log(2);

if (true === true || false !== false) {
	console.log(1);
	// ...
} else console.log(2);

if (true === true || false !== false) {
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
	throw error;
}

func();

//	Exports ____________________________________________________________________

/**
 * Docblock
 */

export default function (arg1:any) :void {
	
	
	
}

export function test (arg1:any) :void {
	
	
	
}

export function test2 (arg1:any) :void {
	
	
	
}

export module myModule {
	
	
	
}

interface PrivateInterface {
	
	
	
}

export interface PublicInterface extends PrivateInterface {
	
	
	
}

@DecoratorA
class PrivateClass {
	
	constructor (options:any) {
		
		
		
	}
	
	@DecoratorB({
		name: array,
	}, array)
	public prop = 1;
	
}

export class PublicClass extends PrivateClass implements PublicInterface {
	
	private _propertyA:string;
	private _propertyB:boolean;
	private _propertyC:number;
	private _propertyD:Object;
	private _propertyE:Function;
	
	public readonly test:boolean;
	
	constructor (options:any) {
		
		super(options);
		
	}
	
	public get property () {
		
		return this._propertyA;
		
	}
	
	public set property (value) {
		
		this._propertyA = value;
		
	}
	
	public method (any:any) :void {
		
		const foo = any;
		
	}
	
	public methodB (bool:boolean) :boolean {
		
		return bool;
		
	}
	
	public methodN (num:number) :number {
		
		return num;
		
	}
	
	public methodS (str:string) :string {
		
		return str;
		
	}
	
	public methodE (obj:Object) :Object {
		
		return obj;
		
	}
	
	public methodA (arr:Array<any>) :Array<any> {
		
		return arr;
		
	}
	
	public methodD (date:Date) :Date {
		
		return date;
		
	}
	
	public methodR (regexp:RegExp) :RegExp {
		
		return regexp;
		
	}
	
	public methodF (func:Function) :Function {
		
		return func;
		
	}
	
}

//	Functions __________________________________________________________________

/**
 * Bla bla bla ...
 * 
 * @param arg1 bla bla blub
 * @param arg2 bla bla blub
 * @param args bla bla blub
 * @returns bla bla blub
 */

function name (arg1:any, arg2:any, ...args:any[]) :boolean {
	
	arguments.length;
	
	let value:number = 0;
	
	this.length;
	
	return false;
	
}

name('test', 'textCodeBlock.background');

/**
 * Multiline comment
 * 
 * @returns A function
 */

function DecoratorA (target:object) :void {
	
	
	
}

function DecoratorB (descriptor:object, info?:any) :Function {
	
	return function (target:Function, name:string, descriptor:PropertyDescriptor) {
		
		
		
	}
	
}