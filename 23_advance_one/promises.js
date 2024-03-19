const promiseOne = new Promise(function (resolve, reject) {
  //do an async task
  //DB calls, cryptography, network

  setTimeout(function () {
    console.log('Async Task Completed');
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log('Promised Consumed');
});


const promiseThree = new Promise(function (resolve, reject) {

)}
  //do an async task
  //DB calls, cryptography, network