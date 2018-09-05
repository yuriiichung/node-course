const countryInfo = require("../"),
  chai = require("chai"),
  expect = chai.expect;

describe("country-info tests", () => {

  it("should get the name of the country 'AR'", (done) => {
    countryInfo.getCountryInfo("AR", (err, result) => {
      expect(err).to.be.eql(null);
      expect(result.name).to.be.eql("Argentina");
      done();
    });
  });

  it("should get the code of the country 'Argentina'", (done) => {
    countryInfo.getCountryInfoByName("Argentina", (err, result) => {
      expect(err).to.be.eql(null);
      expect(result.code).to.be.eql("AR");
      done();
    });
  });

});
