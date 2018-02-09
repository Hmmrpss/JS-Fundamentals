function filter(minAge, nameA, ageA, nameB, ageB){
let personA = {name:nameA, age:ageA};
let personB = {name:nameB, age:ageB};
if (personA.age >= minAge) {
   console.log(`{ name: ${personA.name}, age: ${personA.age} }`);
 }
if (personB.age >= minAge) {
   console.log(`{ name: ${personB.name}, age: ${personB.age} }`);
 }
}

function alt(minAge, nameA, ageA, nameB, ageB){
minAge, ageA, ageB *= 1
  if (minAge <= ageA) {
  console.log(`{ name: '${nameA}', age: ${ageA} }`)
  }
  if(minAge <= ageB){
    console.log(`{ name: '${nameB}', age: ${ageB} }`)
  }
}
