const express = require("express"),
  app = express();

app.get("/", (req, res) => {
  res.json({response: "Hello World!"});
});

app.listen(8000, () => {
  console.log("App listening on port 8000!");
});
