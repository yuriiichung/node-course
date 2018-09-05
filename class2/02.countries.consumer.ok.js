const countryInfo = require("../solved/country-info"),
  code = "AR";

countryInfo.getCountryInfo(code, (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`La data para '${code}' es: ${JSON.stringify(data)}`);
  }
});