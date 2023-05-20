//declaring the object
const obj = {
  color: 'red',
  cost: 1500,
  company: 'asian paints',
};

//To convert an object to an array you use one of three methods:
// Object.keys()
// Object.values()
// Object.entries()

//Note that the Object.keys() method has been available since ECMAScript 2015 or ES6, and the Object.values() and Object.entries() have been available since ECMAScript 2017.

// Suppose that you have a person object as follows:
const person = {
  firstName: 'John',
  lastName: 'Doe',
};

//method -01
//To convert property’s names of the person object to an array, you use the Object.keys() method:

const propertyNames = Object.keys(person);
console.log(propertyNames);

//To convert property’s values of the person object to an array, you use the Object.values() method

const propertValues = Object.values(person);
console.log(propertValues);

//To convert the enumerable string-keyed properties of an object to an array, you use the Object.entries() method i.e. key-value pair return. For example:
const entries = Object.entries(person);
console.log(entries);

/////////////////////////////////////
//MORE EXAMPLES...

var obj2 = {
  1: 5,
  2: 7,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0,
  10: 0,
  11: 0,
  12: 0,
};
console.log(obj2);

//step1)

console.log(obj2['5']); //if we give value then return me the index of specified value ie. 0
console.log(obj2[1]); //if we give key then return me the value at specific key ie. 5

console.log(Object.keys(obj2)); //returns key in array form
console.log(Object.values(obj2)); //return values in array form

var result = Object.keys(obj2).map((keys) => {
  return { [keys]: obj2[keys] }; //here return {} -> object , [keys] gives from the arguments,obj2[keys]-->gives value from obj2 at specified key.
});
console.log(result);
