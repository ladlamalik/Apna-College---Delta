class User {
  constructor(Username){
    this.Username = Username
  }
  logMe(){
    console.log(`Username: ${this.Username}`);
  }

  static createId(){
    return `123`;
  }
  
}

const nadeenm = new User("Nadeem")
// console.log(nadeenm.createId())

class Teacher extends User{
constructor(username, email){
  super(username)
  this.emai = email
}
}

const iphone = new Teacher("iphone", "i@phone.com")

iphone.logMe()