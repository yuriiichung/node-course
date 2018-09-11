const request = require("supertest"),
  expect = require("chai").expect,
  express = require("express"),
  app = express(),
  testName = "Einstein";

app.get("/user", (req, res) => {

  // ..aquí se ejecutaría la lógica, que debería estar probada con unit-tests..!

  res.status(200).json({
    name: req.query.name,
    age: 99
  });
});

request(app)
  .get(`/user?name=${testName}`)
  .expect("Content-Type", /json/)
  .expect(200)
  .end((err, res) => {
    if (err) {
      throw err;
    }
    // Evaluamos las propiedades por separado..
    expect(res.body.name).to.eql(testName);
    expect(res.body.age).to.eql(99);
    // Pero también podemos evaluar directamente todo el objeto!
    // Esto además comprueba si sobran/faltan propiedades en la respuesta
    expect(res.body).to.eql({
      name: testName,
      age: 99
    });
  });
