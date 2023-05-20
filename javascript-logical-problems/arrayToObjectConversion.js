//3-METHODS TO CONVERT ARRAY TO OBJECTS

//method:01 based on forLoop
const arrList = ['tom', 'jerry', 'cat', 'mouse'];

let objList = {}; //considering an empty object list

for (let i = 0; i < arrList.length; i++) {
  objList[i] = arrList[i];
}
console.log(objList);

//method:02 based on in-built Object.assign(target,source) >->>> here Object is the parent of all object in js and assign is a method which belongs to that object
const arrList2 = ['tom', 'jerry', 'cat', 'mouse'];

let objList2 = Object.assign({}, arrList2);
console.log(objList2);

//method:03 based on spread operator
const arrList3 = ['tom', 'jerry', 'cat', 'mouse', 'cartoon', 'spd'];
console.log(...arrList3); //displaying the array list using spread operator

let obj3 = {}; //considering an empty object

obj3 = { ...arrList3 };
console.log(obj3);
