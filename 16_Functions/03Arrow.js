// const user = {
//   username: "Nadeem",
//   price: 999,

//   welcomemessage: function(){
//     console.log(`${this.username}, welcome to website`);
//   }
// }

// user.welcomemessage()
// user.username = "Ehtisham"
// user.welcomemessage();

// function chai() {
//   let username = "Nadeem"
//   console.log(this.username);
// }
// chai()

const chai = (num1, num2) => ({user: "Nadeem"})

console.log(chai(1, 5));