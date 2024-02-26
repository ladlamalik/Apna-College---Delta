//array

const myArr = [0, 1, 2, 3, 4, 5]
// const myHeros = ['Ainak Walah Jin', 'Safeguard']



// myArr.push(6);
// myArr.pop();
myArr.unshift(9);
// console.log(myArr);


// Array Part 2

const marvel_heros = ['Iron Man', 'Captain America', 'Thor'];

const dc_heros = ['Batman', 'Superman', 'Wonder Woman'];

// marvel_heros.push(dc_heros)


// const allHeros = marvel_heros.concat(dc_heros)

// console.log(allHeros);


const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = [another_array.flat(Infinity)]
console.log(real_another_array);


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
