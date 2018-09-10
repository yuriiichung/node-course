const request = require("supertest"),
  expect = require("chai").expect,
  express = require("express"),
  app = express();

app.get("/user", (req, res) => {

  // ..aquí se ejecutaría la lógica, que debería estar probada con unit-tests..!

  res.status(200).json({
    name: "john",
    age: 99
  });
});

request(app)
  .get("/user")
  .expect("Content-Type", /json/)
  .expect(200)
  .end((err, res) => {
    if (err) {
      throw err;
    }
    // Evaluamos las propiedades por separado..
    expect(res.body.name).to.eql("john");
    expect(res.body.age).to.eql(99);
    // Pero también podemos evaluar directamente todo el objeto!
    expect(res.body).to.eql({
      name: "john",
      age: 99
    });
  });
