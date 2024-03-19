const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 3000);
})