/* eslint one-var: 0 */

const p1 = new Promise((resolve) => {
    setTimeout(resolve, 500, "This is p1!");
  }),
  p2 = new Promise((resolve) => {
    setTimeout(resolve, 100, "This is p2!");
  });

Promise.race([p1, p2]).then((value) => {
  console.log(value);
});

setTimeout(() => {
  // Por qué "gana" p1 en este caso?
  Promise.race([p1, p2]).then((val) => {
    console.log(val);
  });
}, 1000);

setTimeout(() => {
  console.log("-----------------------------------");
  const p3 = new Promise((resolve, reject) => {
      setTimeout(reject, 500, "This is p3!");
    }),
    p4 = new Promise((resolve) => {
      setTimeout(resolve, 100, "This is p4!");
    });

  Promise.race([p3, p4])
    .then((value) => {
      console.log(value);
    })
    .catch(() => {
      console.log("Nunca me voy a imprimir!");
    });
}, 2000);


setTimeout(() => {
  console.log("-----------------------------------");
  const p5 = new Promise((resolve) => {
      setTimeout(resolve, 500, "This is p5!");
    }),
    p6 = new Promise((resolve, reject) => {
      setTimeout(reject, 100, "This is p6!");
    });

  Promise.race([p5, p6])
    .then(() => {
      console.log("Nunca me voy a imprimir!");
    })
    .catch((err) => {
      console.error("Error!", err);
    });
}, 4000);