// Key: e43843d3fbcf2868e50e8c1d24a9d4bf
// En https://openweathermap.org/current
// Llamada a servicio: api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}
// Usando Key
// https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=e43843d3fbcf2868e50e8c1d24a9d4bf
// Para cambiar a sistema mértrico se agrega parametro units=metric
// https://api.openweathermap.org/data/2.5/weather?lat=-33.4435096&lon=-70.5823057&units=metric&appid=e43843d3fbcf2868e50e8c1d24a9d4bf

const axios = require('axios');

let getTemp = async(lat, lng) => {

  let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=e43843d3fbcf2868e50e8c1d24a9d4bf`);

  let temp = resp.data.main.temp;
  //
  // if (resp.data.status != "OK") {
  //   throw new Error(`${resp.data.status}, No hay resultados para la ciudad ${direccion}`)
  // }
  // console.log(resp); //Muestra todo el objeto recuperado en la respuesta... con limitciones de console

  return {
    temp,
    cod: resp.data.cod
  }
}

module.exports = {
  getTemp
}
