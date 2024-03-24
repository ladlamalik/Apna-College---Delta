// // let myName = 'Nadeem       '

// // console.log(myName.truelength);

// let myHeros = ['thor', 'spiderman'];

// let heroPower = {
//   thor: 'hammer',
//   spiderman: 'sling',
//     getSpiderPower: function () {
//     console.log(`Spidy power is ${this.spiderman}`);
//   },
// };




// //inheritence

// const User = {
//   name: 'Chai',
//   email: 'chai@google.com'
// }

// const Teacher = {
//   makeVideo: true
// }

// const TeachingSupport = {
//   isAvailable: false
// }

// const TASupport = {
//   makeAssignment: 'JS assignment',
//   fulltime: true,
//   __proto__: TeachingSupport
// }

// Teacher.__proto__ = User


//modern syntax

// Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode       "

String.prototype.trueLength = function(){
  console.log(`${this}`);
  // console.log(`${this.name}`);
  console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Nadeem".trueLength()
"IceTea".trueLength()