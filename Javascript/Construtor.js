

function Person(name , age , gender , degree){
    this.firstname = name,
    this.age = age,
    this.gender = gender,
    this.degree = degree
}


const myFather = new Person("Pratap sing lodhi" , 60 , "male" , "10th")
const myMother = new Person("Hemlata Lodhi" , 34 , "Female" , "Nill")

console.log(myFather)
console.log(myMother)