// let a = 10
// const b = 20
// var c = 30

// nested scopes

function one(){
  const unsername = "Nadeem"

  function two() {
    const website = "Youtube"
    console.log(unsername);

  }
  // console.log(website);

  two()
}

one()
