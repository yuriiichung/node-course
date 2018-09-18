const fs = require("fs");

function getCountriesAndFind(cbFind, cb) {
  fs.readFile(`${__dirname}/countries.json`, (err, data) => {
    if (err) {
      cb(err, null);
    }
    let country = null;
    try {
      country = JSON.parse(data).find(cbFind);
    } catch (exc) {
      cb(exc, null);
    } 
    cb(null, country);
  }); 
}

module.exports = {

  getCountryInfo(code, cb) {
    getCountriesAndFind(c => c.code === code, cb);
  },

  getCountryInfoByName(name, cb) {
    getCountriesAndFind(c => c.name === name, cb);
  }

};