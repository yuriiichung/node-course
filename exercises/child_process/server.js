const http = require("http"),
  hostname = "127.0.0.1",
  port = 8000,
  server = http.createServer(), 
  { fork } = require("child_process");

// function longComputation() {
//   let sum = 0;
//   for (let i = 0; i < 1e10; i++) {
//     sum += i;
//   }
//   return sum;
// }

server.on("request", (req, res) => {
  if (req.url === "/compute") {
    const computeProcess = fork("/compute.js");
    computeProcess.send("execute");
    computeProcess.on("done", (sum) => {
      res.end(`Sum is ${sum}`);
    });
  } else {
    res.end(`Run http://${hostname}:${port}/compute`);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});