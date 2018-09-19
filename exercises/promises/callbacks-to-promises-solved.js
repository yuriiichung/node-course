const http = require("http"),
  url = "http://ws.geeklab.com.ar/dolar/get-dolar-json.php";

function getDollarPriceData() {
  return new Promise((resolve) => {
    try {
      http.get(url, (resp) => {
        let data = "";
    
        resp.on("data", (chunk) => {
          data += chunk;
        });
    
        resp.on("end", () => {
          let json = null;
          json = JSON.parse(data);
          resolve(json);
        });
      });
    } catch (err) {
      throw new Error(err);
    }
  });
}

function calculateConversion(amount) {
  return getDollarPriceData()
    .then(data => ({
      pesos: amount,
      dolar: data.libre,
      conversion: Math.round(amount / data.libre * 100) / 100
    }));
}

calculateConversion(1000)
  .then(data => {
    console.log(`Cotización actual: $${data.dolar} =0`);
    console.log(`La cantidad de '${data.pesos}' pesos equivalen actualmente a '${data.conversion}' dolares!`);
  })
  .catch(err => 
    console.error("Error!!!! :: ", err)
  );