function hacerSalsa() {
  return Promise.resolve("Lista la salsa!");
}

const hervirFideos = Promise.resolve("Listos los fideos!"),
  ponerLaMesa = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Lista la mesa!");
    }, 1000);
  });

Promise.all([hacerSalsa(), hervirFideos, ponerLaMesa])
  .then(([hacerSalsaRes, hervirFideosRes, ponerLaMesaRes]) => {
    console.log(hacerSalsaRes, hervirFideosRes, ponerLaMesaRes);
    console.log("A comerrrrrrrrrr! =]");
  });

setTimeout(() => {
  console.log("-----------------------------------");
  const p1 = new Promise((resolve, reject) => {
      setTimeout(reject, 500, "This is p1!");
    }),
    p2 = new Promise((resolve) => {
      setTimeout(resolve, 100, "This is p2!");
    });

  Promise.all([p1, p2])
    .then(() => {
      console.log("Nunca me voy a imprimir!");
    })
    .catch((err) => {
      console.error("Alguna promise fallo! :: ", err);
    });
}, 2000);