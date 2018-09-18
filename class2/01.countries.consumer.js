const countryInfo = require("../exercises/country-info");

countryInfo.getCountryInfo("AR", (err, res) => {
  if (err) {
    console.error(err);
  } 
  console.log(res);
});

countryInfo.getCountryInfoByName("Argentina", (err, res) => {
  if (err) {
    console.error(err);
  } 
  console.log(res);
});