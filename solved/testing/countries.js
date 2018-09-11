// const countries = require("../country-info");
// En lugar de incluír acá el módulo "country-info", fuerzo a que lo pasen por parámetro.
// Esto permite que sea fácilmente testeable ya que puedo pasar un objecto "mockeado" de countries.
// Patrón: dependency injection, inversion of control.

function verifyResponse(rs) {
  return rs && rs.code && rs.name ? rs : null;
}

module.exports = (countries) => {

  function getByCode(code) {
    return new Promise((resolve, reject) => {
      countries.getCountryInfo(code, (err, rs) => {
        if (err) {
          reject(err);
        } else {
          resolve(verifyResponse(rs));
        }
      });
    });
  }

  function getByName(name) {
    return new Promise((resolve, reject) => {
      countries.getCountryInfoByName(name, (err, rs) => {
        if (err) {
          reject(err);
        } else {
          resolve(verifyResponse(rs));
        }
      });
    });
  }
  
  return {
    getByCode,
    getByName
  };
};
