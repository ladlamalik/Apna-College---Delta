// function sayMyName (){
//   console.log('N');
//   console.log('A');
//   console.log('D');
//   console.log('E');
//   console.log('E');
//   console.log('M');
// }

// // sayMyName()

// function addTwoNumbers(number1, number2){
// //  let result = number1 + number2
// //  return result

// return number1 + number2

// }

// const result = addTwoNumbers(4, 5);

// // console.log("Result: ",result);

// function loggedinUserName (username){
//   if(username === undefined){
//     console.log("Please enter a username");
//   } else {
//    return `${username} Just Logged in`
//   }

// }

// console.log(loggedinUserName("Nadeem"))

function calculateCartPrice(val1, val2, ...num1) {
  // ...num1 here is a rest operator
  return num1;
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
  username: 'Nadeem',
  prices: 199,
};
function handleObject(anyObject) {
  console.log(
    `Username is ${anyObject.username} and price is ${anyObject.price}`
  );
}

handleObject({
  username: "John",
  price: 399
})


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getAray){
  return getAray[1]
}

console.log(returnSecondValue(myNewArray));