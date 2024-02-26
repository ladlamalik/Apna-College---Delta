let p = document.querySelector('p');
let h1 = document.querySelector('h1');
let h3 = document.querySelector('h3');
let btn = document.querySelector('button');

function changeColor() {
  console.log(this.innerText);
  this.style.backgroundColor = 'blue';
}

p.addEventListener('click', changeColor);
h1.addEventListener('click', changeColor);
h3.addEventListener('click', changeColor);
btn.addEventListener('click', changeColor);
