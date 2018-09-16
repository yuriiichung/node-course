const express = require("express"),
  app = express(),
  cluster = require("cluster"),
  morgan = require("morgan"),
  helmet = require("helmet"),
  numCPUs = require("os").cpus().length;

app.set("view engine", "ejs");
app.set("views", `${__dirname}/views`);
app.use(morgan("dev"));
app.use(helmet());

app.get("/", (req, res) => {
  res.render("index", {title: "Hey", message: "Hello there!"});
});

if (cluster.isMaster) {
  console.log(`Master proccess is running with PID #${process.pid}`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker #${worker.process.pid} died with code ${code} and signal ${signal}`);
    cluster.fork();
  });
} else {
  app.listen(8000, () => {
    console.log(`App listening on port 8000 at worker #${process.pid}`);
  });
}