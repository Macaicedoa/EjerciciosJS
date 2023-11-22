class Person {
  constructor(firstName,lastName,age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  
  get firstName(){
    return this._firstName;
  }
  get age(){
    return this._age;
  }
  get lastName(){
    return this._lastName
  }
  
  set age(newAge){
    this._age = newAge;
  }
  set firstName(newName){
    this._firstName = newName;
  }
  set lastName(newLastName){
    this._lastName = newLastName;
  }
  
  get fullName(){
    const fullName = this.firstName+' '+this.lastName;
    return fullName
  }
}


const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
person.age = 20
console.log(person.fullName);
