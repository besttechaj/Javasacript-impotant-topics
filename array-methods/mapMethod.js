//combining first and last name together

const persons = [
  { firstname: 'Malcom', lastname: 'Reynolds' },
  { firstname: 'Kaylee', lastname: 'Frye' },
  { firstname: 'Jayne', lastname: 'Cobb' },
];

let newArray = persons.map((element) => {
  return [element.firstname, element.lastname].join(' ');
});
console.log(`the mapped values result is`, newArray);

console.log(`the type is `, typeof newArray);

for (let i = 0; i < newArray.length; i++) {
  console.log(`The Elements of object are`, newArray[i]);
}
