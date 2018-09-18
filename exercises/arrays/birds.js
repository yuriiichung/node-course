/* eslint one-var: 0 */

const birds = [
  {
    name: "Hornero",
    family: "Furnaridae"
  },
  {
    name: "Junquero",
    family: "Furnaridae"
  },
  {
    name: "Tachurí Siete Colores",
    family: "Tirannydae"
  },
  {
    name: "Piojito Común",
    family: "Tirannydae"
  },
  {
    name: "Benteveo Común",
    family: "Tirannydae"
  },
  {
    name: "Zorzal Colorado",
    family: "Turdidae"
  }
];

// Imprimir lo siguiente:

// 1. Array de nombres de todos los pájaros ordenados alfabéticamente.
birds.sort((bird1, bird2) => bird1.name > bird2.name).forEach(bird => console.log(bird.name));

// 2. Obtener el objeto completo del que tiene nombre "Zorzal Colorado".
console.log(birds.find((bird) => bird.name === "Zorzal Colorado"));

// 3. Array de nombres de los pájaros de la familia "Tirannydae".
console.log(birds.filter(bird => bird.family === "Tirannydae"));

// 4. Cantidad de pájaros de la familia "Furnaridae".
console.log(birds.filter(bird => bird.family === "Furnaridae").length);

console.log(birds.reduce((v, bird) => {
  if (bird.family === "Furnaridae") {
    return v + 1;
  }
  return v;
}, 0));