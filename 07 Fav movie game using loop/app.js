const favMovie = "avatar";

let guess = prompt("guess my favourite movie");

while ((guess != favMovie) && (guess != "quit")) {
    guess = prompt("Wrong Guess, Please Try Again");
};


if (guess == favMovie) {
    console.log("You got it right!");
} else {
  console.log("You Quit, Game over");
}