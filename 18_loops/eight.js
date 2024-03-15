const myNums = [1, 2, 3];

// reduce method through funtion
// const myTotal = myNums.reduce(function (acc, currval) {
//   console.log(`acc: ${acc} and currval: ${currval}`);
//   return acc + currval;
// }, 0);

//reduce method through arrow function

const myTotal = myNums.reduce((acc, curr) => acc + curr, 3);

console.log(myTotal);

const shoppingCart = [
  {
    itemName: 'js course',
    price: 2999,
  },
  {
    itemName: 'python',
    price: 999,
  },
  {
    itemName: 'mobile development',
    price: 5999,
  },
  {
    itemName: 'js data science course',
    price: 12999,
  },
];

const priceTotal = shoppingCart.reduce( (acc, item) => acc + item.price, 0 )

console.log(priceTotal);
