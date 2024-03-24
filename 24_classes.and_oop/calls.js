function SetUserName(username){
  //complex DB Calls
  this.username = username
  console.log("Called");
}

function createUser(username, email, password){
  SetUserName.call(this, username)

  this.email = email
  this.password = password
}

const chai = new createUser("chai", "chai@facebook.com", "123")
console.log(chai);