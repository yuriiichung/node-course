const http = require("http"),
  {fork} = require("child_process"),
  hostname = "127.0.0.1",
  port = 8000,
  server = http.createServer();

server.on("request", (req, res) => {
  if (req.url === "/compute") {
    // write your code here
  } else {
    res.end(`Run http://${hostname}:${port}/compute`);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});