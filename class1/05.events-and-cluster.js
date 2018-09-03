// Example from: https://nodejs.org/api/cluster.html#cluster_event_message

const cluster = require("cluster"),
  http = require("http");

process.on("uncaughtException", (err) => {
  console.error("UNCAUGHT EXCEPTION", err);
  process.exit(1);
});

process.on("unhandledRejection", (err) => {
  console.error("UNHANDLED REJECTION", err);
  process.exit(2);
});

if (cluster.isMaster) {
  // Keep track of http requests
  let numReqs = 0;
  setInterval(() => {
    console.log(`numReqs = ${numReqs}`);
  }, 1000);

  // Master handler that receives messages from its workers
  function messageHandler(msg) {
    if (msg.cmd === "notifyRequest") {
      // Count requests
      const worker = cluster.workers[msg.id];
      numReqs += 1;

      if (numReqs === 4) {
        // Test the uncaughtException message
        worker.send({cmd: "throwUncaughtException"});
      } else if (numReqs === 6) {
        // Test the uncaughtRejection message
        worker.send({cmd: "throwUncaughtRejection"});
      } else {
        // Tell the worker to send the response with numReqs
        worker.send({cmd: "notifyResponse", numReqs});
      }
    }
  }

  // Start workers and listen for messages
  const numCPUs = require("os").cpus().length;
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  for (const id in cluster.workers) {
    cluster.workers[id].on("message", messageHandler);
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker #${worker.process.pid} died with code ${code} and signal ${signal}`);
  });
} else {
  // Worker processes have a http server
  http.createServer((req, res) => {
    if (req.url === "/favicon.ico") {
      // Skip favicon requests!
      res.writeHead(404);
      res.end("Not found!");
    } else {
      // Notify master about the request
      process.send({id: cluster.worker.id, cmd: "notifyRequest"});

      // Wait the master answer to send the response
      process.on("message", (msg) => {
        if (msg.cmd === "notifyResponse") {
          res.writeHead(200);
          res.end(`Hello world! This is worker #${process.pid} at request#${msg.numReqs}\n`);
        } else if (msg.cmd === "throwUncaughtException") {
          throw new Error(`This exception is not caught at worker #${process.pid}!`);
        } else if (msg.cmd === "throwUncaughtRejection") {
          Promise.reject(`This rejection is not caught at worker #${process.pid}!`);
        }
      });
    }
  }).listen(8000);

  console.log(`Worker started with PID #${process.pid}`);
}