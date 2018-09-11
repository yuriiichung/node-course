/* eslint one-var: 0 */

// Example from https://medium.com/@bluepnume/even-with-async-await-you-probably-still-need-promises-9b259854c161

function makeDough() {
  console.log("haciendo masa...");
  return new Promise((resolve) => {
    const dough = {
      components: [],
      add(c) {
        this.components.push(c);
      }
    };
    setTimeout(() => resolve(dough), 3000);
  });
}

function makeSauce(tipo) {
  console.log(`haciendo salsa tipo '${tipo}'...`);
  return new Promise((resolve) => {
    const sauce = {
      determineCheese() {
        return "cheddar";
      }
    };
    setTimeout(() => resolve(sauce), 1000);
  });
}

function grateCheese(cheese) {
  console.log(`gratinando queso '${cheese}'...`);
  return new Promise((resolve) => {
    setTimeout(() => resolve(cheese), 500);
  });
}

function diffTime(time) {
  return Math.round(((new Date()) - time) / 100) / 10;
}


// Primer versión, se ejecuta todo secuencial
// |-------- dough --------> |-------- sauce --------> |-- cheese -->
async function makePizza(sauceType = "red") {
  console.log("Ejemplo makePizza() 1");
  const start = new Date(),
    dough = await makeDough(),
    sauce = await makeSauce(sauceType),
    cheese = await grateCheese(sauce.determineCheese());
  
  dough.add(sauce);
  dough.add(cheese);
  
  console.log(`Ejemplo makePizza() 1 tardó ${diffTime(start)} segundos`);
  return dough;
}


// Segunda versión, paralelizamos masa y salsa, luego el queso:
// |-------- dough -------->
// |-------- sauce --------> |-- cheese -->
async function makePizza2(sauceType = "red") {
  console.log("-------------------------------------");
  console.log("Ejemplo makePizza() 2");
  const start = new Date(),
    [dough, sauce] = await Promise.all([makeDough(), makeSauce(sauceType)]),
    cheese = await grateCheese(sauce.determineCheese());

  dough.add(sauce);
  dough.add(cheese);

  console.log(`Ejemplo makePizza() 2 tardó ${diffTime(start)} segundos`);
  return dough;
}

// Como el queso espera a ambas cosas, masa y salsa,
// puede darme algo así, aunque la salsa haya tardado menos que la masa:
// |-------- dough -------->
// |--- sauce --->           |-- cheese -->


// Tercera versión, hagamos que el queso solo espere a la salsa:
// |-------- dough -------->
// |------ sauce -----> |-- cheese -->
async function makePizza3(sauceType = "red") {
  console.log("-------------------------------------");
  console.log("Ejemplo makePizza() 3");
  const start = new Date(),
    doughPromise = makeDough(),
    saucePromise = makeSauce(sauceType),
    cheesePromise = saucePromise.then((sauce) => {
      return grateCheese(sauce.determineCheese());
    });
  
  return Promise.all([doughPromise, saucePromise, cheesePromise])
    .then(([dough, sauce, cheese]) => {
      
      dough.add(sauce);
      dough.add(cheese);
      
      console.log(`Ejemplo makePizza() 3 tardó ${diffTime(start)} segundos`);
      return dough;
    });
}


// Cuarta versión, lo mismo pero puramente async/await
async function makePizza4(sauceType = "red") {
  console.log("-------------------------------------");
  console.log("Ejemplo makePizza() 4");
  const start = new Date(),
    doughPromise = makeDough(),
    saucePromise = makeSauce(sauceType);
  
  const sauce = await saucePromise,
    cheese = await grateCheese(sauce.determineCheese()),
    dough = await doughPromise;
  
  dough.add(sauce);
  dough.add(cheese);
  
  console.log(`Ejemplo makePizza() 4 tardó ${diffTime(start)} segundos`);
  return dough;
}

(async () => {
  await makePizza();
  await makePizza2();
  await makePizza3();
  await makePizza4();
})();