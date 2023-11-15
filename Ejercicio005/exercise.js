const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

person2.firstName = "Simon";


// Modify the property `firstName` of the `person2` in "Simon".

console.log(person1);
console.log(person2);

// The property `firstName` of the `person1` also changes because the copy of the object maps to the memory allocation of the firts object
// It is a superficial copy of the object and does not create a completely new object. Any change in the copied object will change the original values;
