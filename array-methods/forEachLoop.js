//for each loop...

//EXAMPLE - 01
const city = [
  'mumbai',
  'delhi',
  'kolkata',
  'bareilly',
  'jharharharipur',
  'shahjahanpur',
];
city.forEach((value, index, currentArray) => {
  console.log(`position is ${index} : ${value}`);
});

//EXAMPLE - 02

const number = [1312, 324, 4, 543, 5366, 546];
let sum = 0;

number.forEach((element) => (sum += element));

//the sum is a global declarative value hence we can print it outside the block
console.log(sum);

//EXAMPLE - 03 ---> ADVANCE LEVEL ...count the number of occurrence

const alphabets = ['a', 'f', 'g', 'a', 'a', 'c', 'd', 'b', 'b'];
let result = {};

alphabets.forEach((element, index) => {
  console.log(element);
});
