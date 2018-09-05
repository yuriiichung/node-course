const fs = require("fs");

function loadCountriesAndFind(finderFunc, cb) {
  fs.readFile(`${__dirname}/countries.json`, "utf8", (err, data) => { // eslint-disable-line consistent-return
    if (err) {
      return cb(err, null);
    }

    let result = null;
    try {
      result = JSON.parse(data).find(finderFunc);
    } catch (exc) {
      cb(exc, null);
    }

    cb(null, result);
  });
}

module.exports = {

  getCountryInfo(code, cb) {
    // eslint-disable-next-line func-style
    const finderFunc = (c) => {
      return c.code === code;
    };

    loadCountriesAndFind(finderFunc, cb);
  },

  getCountryInfoByName(name, cb) {
    function finderFunc(c) {
      return c.name === name;
    }

    loadCountriesAndFind(finderFunc, cb);
  },

  getCountryInfoWithRequire(code) {
    const countries = require("./countries.json"),
      result = countries.find((c) => {
        return c.code === code;
      });
    
    return result;
  }
  
};
