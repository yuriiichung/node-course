const EventEmitter = require("events"),
  myEmitter = new EventEmitter();

myEmitter.on("arrancaElPartido", (tiempo) => {
  console.log(`Arrancó el partido dentro de ${tiempo}!`);
});

myEmitter.on("entretiempo", () => {
  console.log("Los equipos se van al descanso...");
});

myEmitter.on("finDelPartido", () => {
  console.log("Y se ha terminado Macaya!");
});

// emiting events
myEmitter.emit("arrancaElPartido", 23);

setTimeout(() => {
  myEmitter.emit("entretiempo");

  setTimeout(() => {
    myEmitter.emit("finDelPartido");
  }, 5000);
}, 5000);