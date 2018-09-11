// const countryInfo = require("../country-info");
// En lugar de incluír acá el módulo "country-info", fuerzo a que lo pasen por parámetro.
// Esto permite que sea fácilmente testeable ya que puedo pasar un objecto "mockeado" de countryInfo.
// Patrón: dependency injection, inversion of control.

module.exports = (countryInfo) => {

  function getByCode(code) {
    // Your promise code here!
  }

  function getByName(name) {
    // Your promise code here!
  }
  
  return {
    getByCode,
    getByName
  };
};
