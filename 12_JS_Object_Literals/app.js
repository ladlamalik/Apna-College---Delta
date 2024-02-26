// // const student = {
// //   name: 'Nadeem Ahmed',
// //   age: 21,
// //   city: 'Karachi',
// // };

// // console.log(student)

// // create Thread / Twitter Post

// // let twitter = {
// // username: "letsdesign99",
// // content: "This is the first post that we gonna create using the object literals",
// // likes: 100,
// // reposts: 25,
// // tags: ["#javascript", "#webdevelopment", "#tutorial"]

// // }

// // console.log(twitter.username);
// // console.log(twitter.content);
// // console.log(twitter.likes);

// // console.log(`${twitter.username} has ${twitter.likes} likes and ${twitter.reposts} reposts`);

// // //conversion in get values

// // const obj = {
// //   1: 'a',
// //   2: 'b',
// //   true: 'c',
// //   null: 'd',
// //   undefined: 'e',
// // }

// // console.log(obj[1]);
// // console.log(obj[true]);
// // console.log(obj[null]);

// //Add and update values in object literals

// // const student = {
// //   name: 'Nadeem Ahmed',
// //   age: 33,
// //   city: 'Karachi',
// // };

// // student.city = 'Mumbai';

// // student.gender = 'Male';

// // student.age = 25;

// // Nested Objects

// // const classInfo = {
// //   Mike: {
// //     Grade: 'A+',
// //     City: 'Mitthi',
// //   },
// //   John: {
// //     Grade: 'A',
// //     City: 'Karachi',
// //   },
// //   Anna: {
// //     Grade: "0",
// //     City: 'Lahore',
// //   },
// // };

// // Arrays of objects

// // const classInfo = [
// //   {
// //     name: 'Mike',
// //     grade: 'A+',
// //     city: 'Mitthi',
// //   },
// //   {
// //     name: 'John',
// //     grade: 'A',
// //     city: 'Karachi',
// //   },
// //   {
// //     name: 'Anna',
// //     grade: '0',
// //     city: 'Lahore',
// //   },
// // ];

// // console.log(classInfo[1].name);
// // console.log(classInfo[2].city);

// // //Math Objects

// // //Random Integers

// // let random = Math.floor(Math.random() * 10) + 1;

// // console.log(random);

// // // Practice Quiz

// //guessing game

// // const max = prompt('enter the max number');

// // const random = Math.floor(Math.random() * max) + 1;

// // let guess = prompt('enter your guess');

// // while (true) {
// //   if( guess == "quit") {
// //     console.log("User Quit");
// //     break;
// //   }

// //   else if( guess == random) {
// //     console.log("You are Right");
// //     break;
// //   }

// //   else if {
// //     prompt('Your guess was wrong, please try again');
// //   }
// //      else if(guess < random) {
// //     guess = prompt("Your guess was too Small");
// //   }
// //    else {
// //     guess = prompt("Your guess was too large, please try again");
// //   }
// // };

// function greeting() {
//   var name = prompt('What is your name?');
//   var result = `Hellow ${name}`; //
//   console.log(result);
// }

// // greeting();

// //How do arguments funciton in funcitons

// //How to we add 2 numbers together in a function

// function subNumber(num1, num2) {
//   var result = num1 + num2;
//   console.log(num1 + num2);
// }

// subNumber(5, 10);

// // For & While Loops

// //while loops

// var num = 0;

// while (num < 100) {
//   num += 1;
//   console.log(num);
// }

// // Strings in Javascript (common methods)

// //Arrays
// let fruits = ['apple', 'banana', 'orange', 'pineapples'];

// for (let i = 0; i< fruits.length; i++) {
//   console.log(fruits[i]);
// }

// var dog = {

// // Task 1: consoleStyler function
// function consoleStyler(color, background, fontSize, txt) {
//     const message = "%c" + txt;
//     let style = `color: ${color};`;
//     style += `background: ${background};`;
//     style += `font-size: ${fontSize};`;
//     console.log(message, style);
// }

// // Task 2: celebrateStyler function
// function celebrateStyler(reason) {
//     const fontStyle = "color: tomato; font-size: 50px";

//     if (reason === "birthday") {
//         console.log(`%cHappy birthday`, fontStyle);
//     } else if (reason === "champions") {
//         console.log(`%cCongrats on the title!`, fontStyle);
//     } else {
//         const message = "Default Message";
//         const style = "color: black; font-size: 20px";
//         console.log(message, style);
//     }
// }

// // Task 3: Invoke consoleStyler and celebrateStyler functions
// consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');
// celebrateStyler('birthday');

// // Task 4: styleAndCelebrate function
// function styleAndCelebrate(color, background, fontSize, txt, reason) {
//     consoleStyler(color, background, fontSize, txt);
//     celebrateStyler(reason);
// }

// // Task 4: Invoke styleAndCelebrate function
// styleAndCelebrate('ef7c8e', 'fae8e0', '30px', 'You made it!', 'champions');

// var globalVar = 77;

// function scopeTest() {
//   var localVar = 88;
// }

// console.log(localVar);

//  function meal(animal) {
//    animal.food = animal.food + 10;
//  }

//  var dog = {
//    food: 10,
//  };
//  meal(dog);
//  meal(dog);

//  console.log(dog.food);

// function two() {
//   return 2;
// }

// function one() {
//   return 1;
// }

// function calculate(initialValue, incrementValue) {
//   return initialValue() + incrementValue() + incrementValue();
// }

// console.log(calculate(two, one));

// var purchase1 = {
//   shoes: 100,
//   tax: 1.2,
//   totalPrice: function() {
//     var calculation = this.shoes * this.tax;
//     console.log('Tootal Price:', calculation);
// }};

// purchase1.totalPrice();

// var purchase2 = {
//   shoes: 50,
//   tax: 1.2,
//   totalPrice: function () {
//     var calculation = this.shoes * this.tax;
//     console.log('Tootal Price:', calculation);
//   },
// };

// purchase2.totalPrice();

//       class Person {
//         constructor(name = 'Tom', age = 20, energy = 100) {
//           this.name = name;
//           this.age = age;
//           this.energy = energy;
//         }

//         sleep() {
//           this.energy += 10;
//         }

//         doSomethingFun() {
//           this.energy -= 10;
//         }
//       }

//       const defaultPerson = new Person();
//       console.log(`${defaultPerson.name} - Age: ${defaultPerson.age} Energy:${defaultPerson.energy}`);

//       defaultPerson.doSomethingFun();
//       console.log(`After doing something fun - Energy: ${defaultPerson.energy}`);

//       defaultPerson.sleep();
//       console.log(`After sleeping - Energy ${defaultPerson.energy}`);

// //Task 2
// class Worker extends Person {
//   constructor(Name = "John", age= 21, xp = 0, hourlyWage = 10, energy = 100){

//     super(Name, age, energy);
//     this.xp = xp;
//     this.hourlyWage = hourlyWage;
//   }

//   goToWork(){
//     this.xps += 10;
//   }
//   }

// const defaultWorker = new Worker();
// console.log(
//   `${defaultWorker.name} - Age: ${defaultWorker.age}, Energy: ${defaultWorker.energy}, XP: ${defaultWorker.xp}, Hourly Wage: ${defaultWorker.hourlyWage}`
// );

// // Using methods from the base class and the derived class
// defaultWorker.sleep();
// console.log(`After sleeping - Energy: ${defaultWorker.energy}`);

// defaultWorker.doSomethingFun();
// console.log(`After doing something fun - Energy: ${defaultWorker.energy}`);

// function createIntern() {
//   const intern = new Worker('Bob', 21, 110, 0, 10);
//   intern.goToWork();
//   return intern;
// }

// // Create and use the intern object
// const newIntern = createIntern();
// console.log(
//   `${newIntern.name} - Age: ${newIntern.age}, Energy: ${newIntern.energy}, XP: ${newIntern.xp}, Hourly Wage: ${newIntern.hourlyWage}`
// );

// function createManager() {
//   const manager = new Worker('Alice', 30, 120, 100, 30);
//   manager.doSomethingFun();
//   return manager;
// }

// // Create and use the manager object
// const newManager = createManager();
// console.log(
//   `${newManager.name} - Age: ${newManager.age}, Energy: ${newManager.energy}, XP: ${newManager.xp}, Hourly Wage: ${newManager.hourlyWage}`
// );

//Task 1: Code a Person Class
// class Person {
//   constructor(name = 'Tom', age = 20, energy = 100) {
//     this.name = name;
//     this.age = age;
//     this.energy = energy;
//   }
//   sleep() {
//     this.energy += 10;
//   }
//   doSomethingFun() {
//     this.energy -= 10;
//   }
// }

// // Task 2: Code a Worker Class
// class Worker extends Person {
//   constructor(name, age, energy, xp = 0, hourlyWage = 10) {
//     super(name, age, energy);
//     this.xp = xp;
//     this.hourlyWage = hourlyWage;
//   }
//   goToWork() {
//     this.xp += 10;
//   }
// }

// //Task 3: Code an intern object, run methods
// function intern() {
//   var internObject = new Worker('Bob', 21, 110, 0, 10);
//   internObject.goToWork();
//   return internObject;
// }

// //Task 4: Code a manager object, methods
// function manager() {
//   var managerObject = new Worker('Alice', 30, 120, 100, 30);
//   managerObject.doSomethingFun();
//   return managerObject;
// }

// console.log(intern());
// console.log(manager());

// class Animal {}

// class Cat extends Animal {
//   constructor() {
//     super();
//     this.noise = 'meow';
//   }
// }

// var result = new Animal();
// console.log(result.noise);

// class Person {
//   sayHello() {
//     console.log('Hello');
//   }
// }

// class Friend extends Person {
//   sayHello() {
//     console.log('Hey');
//   }
// }

// var result = new Friend();
// result.sayHello();

// a

// const gameName = new String('Nadeem-ahmed-malik');

// console.log(gameName.indexOf('d'));

// const newGameName = gameName.substring(0, 4);
// console.log(newGameName);

// const anotherString = gameName.slice(-6, 4);
// console.log(anotherString);

// const newStringOne = '      Nadeem      ';
// console.log(newStringOne.trim());
// console.log(newStringOne);

// const url = 'https://nadeem.com/nadeem%20ahmed';

// console.log(url.replace('%20', '-'));

// console.log(url.includes('nadeem'));
// console.log(gameName.split('-'));

//12 Number and Maths in JS

// const balance = new Number(100);
// console.log(balance);

// const score = 400.;
// console.log(score);
// console.log(score.toFixed(2));

// const otherNumnber = 123.5966;
// console.log(otherNumnber.toPrecision(3));

// const hundreds = 1000000
// console.log(hundreds.toLocaleString("en-PK"));

// const score = 400

// // console.log(score);

// const balance = new Number(100);
// // console.log(balance);

// // console.log(balance.toString().length);

// // console.log(balance.toFixed(2));

// const otherNumber = 123.8966

// // console.log(otherNumber.toPrecision(3));

// const hundreds = 100000
// // console.log(hundreds.toLocaleString());

// console.log(Math.min(24, 39, 146, 1048, 547,));
// console.log(Math.max(24, 39, 146, 1048, 547,));

// console.log(Math.random());

// console.log((Math.random()*10 ) + 1);

// console.log(Math.floor(Math.random()*10) + 1);

// const min = 10
// const max = 20

// console.log(Math.floor(Math.random() * (max - min +1)) + min);

// Date and Time in JS

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);

// let myTimeStamp = Date.now()
// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();

newDate.toLocaleDateString('default', {
  weekday: 'long',
});

console.log(newDate);