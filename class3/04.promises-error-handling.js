function ejemplo1() {
  Promise.reject("some error message")
    .then(
      () => {
        console.log("Nunca me voy a imprimir!");
      },
      (err) => {
        console.log("Me imprimo por que soy una función como 2do parámetro del then! :: ", err);
      }
    );
}

function ejemplo2() {
  console.log("-----------------------------------");
  Promise.reject("some error message")
    .then(() => {
      console.log("Nunca me voy a imprimir!");
    })
    .catch((err) => {
      console.log("Me imprimo por que me definieron dentro del catch! :: ", err);
      return "Yeah yeah.. whatever dude!";
    })
    .then((msg) => {
      console.log("Me voy a imprimir por que estoy después del catch! :: ", msg);
    });
}

function ejemplo3() {
  console.log("-----------------------------------");
  Promise.resolve("a value")
    .catch(() => {
      console.log("Nunca me voy a imprimir!");
    })
    .then((msg) => {
      console.log(`Recibí el valor '${msg}' y voy a tirar un error!`);
      throw new Error("some error 4u");
    })
    .then(() => {
      console.log("Nunca me voy a imprimir!");
    })
    .catch((err) => {
      console.log("Y el error fue:", err.message);
    });
}

function ejemplo4() {
  console.log("-----------------------------------");
  Promise.reject()
    .catch(() => {
      console.log("Soy un catch y voy a tirar un error!");
      throw new Error("some error 4u");
    })
    .then(() => {
      console.log("Nunca me voy a imprimir!");
    })
    .catch((err) => {
      console.log("Y el error fue:", err.message);
    });
}

function ejemplo5(ok) {
  console.log("-----------------------------------");
  return new Promise((resolve, reject) => {
    return ok ? resolve(ok) : reject("That's NOT ok dude!");
  });
}

setTimeout(ejemplo1, 0);
setTimeout(ejemplo2, 1000);
setTimeout(ejemplo3, 2000);
setTimeout(ejemplo4, 3000);

setTimeout(() => {
  ejemplo5("holiiii!").then((val) => {
    console.log("El ejemplo 5 devolvió el valor: ", val);
  });
}, 4000);

setTimeout(() => {
  ejemplo5().catch((err) => {
    console.log("El ejemplo 5 devolvió el error: ", err);
  });
}, 5000);