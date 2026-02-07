//  condition statements

// problem1 l postive ,Negative or Zere

// let number = 0
if (number > 0) {
  console.log("Positive");
} else if (number < 0) {
  console.log("Negative");
} else {
  console.log("zero");
}

// problem2 Even odd

// let num = 13

if (num % 2 === 0) {
  console.log("Even");
} else {
  console.log("odd");
}

problem3;

let a = 10;
let b = 10;

if (a < b) {
  console.log("lesser");
} else if (a > b) {
  console.log("greateer");
} else {
  console.log("both are equal");
}

// problem 4 Voting eligiblity

const age = 18;
if (age >= 18) {
  console.log("Eligible To vote!");
} else {
  console.log("Not eleigble to Vote");
}

const year = 2024;

if (year % 400 === 0) {
  console.log("Leap Year");
} else if (year % 4 === 0 && year % 100 !== 0) {
  console.log("Leap Year");
} else {
  console.log("Not a Leap Year");
}

// problem 5 multiple of 5
// let num = 45
if (num % 5 === 0) {
  console.log("Multiple of 55");
} else {
  console.log("NOt a multiple of 5");
}

// Vowel or consonanc

let char = "MahEsh";
let Name = char.toLowerCase();
console.log(Name);
let vowel = 0;
let consonant = 0;
for (let i = 0; i < Name.length; i++) {
  if (
    Name[i] === "a" ||
    Name[i] === "o" ||
    Name[i] === "i" ||
    Name[i] === "e" ||
    Name[i] === "u"
  ) {
    vowel++;
  } else {
    consonant++;
  }
}
console.log(vowel, consonant);

let number = 11;
if (number <= 999 && number >= 100) {
  console.log("Number is 3 digit");
} else {
  console.log("Number is not 3 digit");
}

let marks = 33;
if (marks >= 33) {
  console.log("pass");
} else {
  console.log("fail");
}

let temperature = 35;

temperature > 30 ? console.log("Hot") : console.log("Normal");

switcase;

let day = "Shrikant tiware";
switch (day) {
  case "sun":
    console.log("sunday");
    break;
  case "mon":
    console.log("Monday");
    break;

  default:
    console.log(day);
    break;
}
