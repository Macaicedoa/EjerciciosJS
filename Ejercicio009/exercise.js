const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

// Print values of person using Object.keys

let keys = Object.keys(person);

for(i = 0;i<keys.length;i++){
  console.log(keys[i] +': '+ person[keys[i]])
}