/*
The slice() method returns selected elements in an array, as a new array.

The slice() method selects from a given start, up to a (not inclusive) given end.

The slice() method does not change the original array.

Syntax:
array.slice(start, end)

start	->Optional.
Start ->position. Default is 0.
Negative numbers select from the end of the array.
end	Optional.
End position. Default is last element.
Negative numbers select from the end of the array.
 */

const array = ['amazon', 'google', 'flipkart', 'zara'];
console.log(array);

let result = array.slice(1, 2);
console.log(result);

let result2 = array.slice(1, 3);
console.log(result2);

let result3 = array.slice(-1);
console.log(result3);

console.log(array.slice(0, 1));
