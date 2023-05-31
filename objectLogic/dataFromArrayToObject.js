//TRANSFER DATA FROM array to object

const arrayData = [
  'set-1',
  'set-2',
  'set-3',
  'set-4',
  'set-5',
  'set-6',
  'set-7',
];
console.log('my array data is', arrayData);

//defining one empty object
let myObj = {};

//here element->value and key->index
arrayData.map((element, index) => {
  //storing the data in the form of key and value pair inside myObj
  myObj[index] = element; //here i am passing the value at every index like  myObj[0]='set-1',...
});

console.log(myObj);

console.log(myObj[2]); //this will give me the value if I provide key/index/position
