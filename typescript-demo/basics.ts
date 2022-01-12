// primitives

// number (lowercase)
let n: number;
n = 12;

// string
let s: string;
s = 'aorestn';

// boolean
let b: boolean;
b = true;

// complex types

let hobbies: string[]; // array of strings
hobbies = ['books', 'sports', 'tech'];

type Person = {
  name: string,
  age: number,
}; // type alias

let person: Person; // object type

person = {
  name: 'pablo',
  age: 25,
};

let people: Person[];

// type inference
let courseName = 'React';

// courseName = 1;

// union types
let course: string | number;
course = 'React';
course = 100;

// functions and types
function add(a: number, b: number) {
  return a + b;
}

function printVariable(val: any) { // return is infered. type void
  console.log(val);
}

// generics

function insertAtBeggining<T>(array: T[], value: T) {
  return [value, ...array];
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeggining(demoArray, -1);

// updatedArray[0].split('');