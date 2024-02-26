// // singleton

// // Object Literals

// const mySym = Symbol('key1');

// const JsUser = {
//   name: 'Nadeem',
//   'full name': 'Nadeem Ahmed',
//   [mySym]: 'mykey1',
//   age: 30,
//   location: 'Islamabad',
//   email: 'nadeem@google.com',
//   isLoggedIn: false,
//   lastLoginDays: ['Monday', 'Saturday'],
// };

// // console.log(JsUser.email);

// console.log(JsUser['isLoggedIn']);
// console.log(JsUser['full name']);
// console.log(JsUser[mySym]);

// JsUser.greeting = function(){
//   console.log("Hello Js user");
// }

// console.log(JsUser.greeting());

const obj1 = { 1: 'a', 2: 'b' };
const obj2 = { 3: 'a', 4: 'b' };

// const obj3 = Object.assign({}, obj1, obj2);

const obj3 = { ...obj1, ...obj2 };

console.log(obj3);

let tinderUser = {
  id: '123ABA',
  name: 'Sammy',
  isLoggedIn: 'false',
};

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));


