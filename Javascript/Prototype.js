function Person(first, last, age, eyecolor) {
  this.firstname = first;
  this.lastname = last;
  this.age = age;
  this.eyecolor = eyecolor;
  this.country = "India";
  this.fullname = function(){
    return this.firstname + " " + this.lastname
  }
}

let myfather = new Person("Pratap", "Lodhi", 55, "brown");
myfather.nationality = "Indian";
// let full = myfather.fullname()
// console.log(full)

// add method for full name
// myfather.name = function(){
//     return this.firstname + " " + this.lastname
// }

// add properties using prototype
Person.prototype.city = "Bhopal"


Person.prototype.method = function(){
    return this.age
    
}
console.log(myfather);