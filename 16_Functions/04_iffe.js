// Immidiately Inboked function express (IIFE)

(function chai() {
  console.log(`DB CONNECTED`);

  //named IIFE
})();

((name) => {
  console.log(`DB CONNECTED TWOb ${name}`);
  //unnamed IIFE
})("Nadeem");
