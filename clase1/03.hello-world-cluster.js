// Example from: https://nodejs.org/api/cluster.html

const cluster = require("cluster"),
  http = require("http"),
  numCPUs = require("os").cpus().length;

if (cluster.isMaster) {
  console.log(`Master proccess is running with PID #${process.pid}`);

  // Fork workers, one for each CPU
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker #${worker.process.pid} died with code ${code} and signal ${signal}`);
  });
} else {
  // Workers can share any TCP connection
  // In this case it is an HTTP server
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end(`Hello world! This is worker #${process.pid}\n`);
  }).listen(8000);

  console.log(`Worker started with PID #${process.pid}`);
}