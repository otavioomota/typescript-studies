const string: string = 'texto';
const stringConcat: string = `texto concat with ${1}`;
const bool: boolean = true;

//Binary, Hex, Integer and Float
const number: number = 10;

//Typing an array

//Only elements strings
const array: string[] = ['only', 'strings'];
// Other way to declare - Generics
const array2: Array<string> = ['only', 'strings'];

//Tuple is an array that has a limited number of elements and types specified
const tuple: [number, string] = [10, 'string'];
const tuple2: [number, string, number] = [10, 'string', 11];

// Save a list of itens
enum Theme {
  Dark = 'dark',
  Light = 'light',
}

// Could be any type - NOT RECOMMENDED
const any: any = 'string';
// The typescript allow use any function on the variable !!
// any.name = 'name';
// any.split

// Like the any but you cannot use any function
let unknown: unknown = 10;
// When you know the type
// unknown.split - ERROR

//Typing a function
function sum(firstNumber: number, secondNumber: number): number{
  return firstNumber + secondNumber
};

// returns undefined.
function sumReturnVoid(firstNumber: number, secondNumber: number): void {
  return undefined;
};


// Return type NEVER is code which never ends
function sunNeverReturn(firstNumber: number, secondNumber: number): never {
    while(true){
      console.log('hello world');  
    }
};

//ERROR
//const result = sunNeverReturn(10,20);

//Example of usage - DON'T LEAVE OF CODE
function example(): never{
  throw new Error("");
}

// Type Object

const obj: Object = {}; // any object
