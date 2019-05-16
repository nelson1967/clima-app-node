const axios = require('axios');

let getLugarLatLng1 = async(dir) => {
    let dirEncode = encodeURI(dir);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${dirEncode}`,
        timeout: 5000,
        headers: { 'X-RapidAPI-Key': '926dd35178msh219a5fc53ff5601p14df63jsn245ed175cca2' }
    });
    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultafdos para la ubicacion ${dir}`);
    }
    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;
    return {
        direccion,
        lat,
        lng,
        cod: "OK"
    }
};

let getLugarLatLng = async(direccion) => {

    let encodeUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodeUrl }&key=AIzaSyCteaXg5edJICP3xrRrrzfBW9IPR7FwGGo`);

    if (resp.data.status != "OK") {
        throw new Error(`${resp.data.status}, No hay resultados para la ciudad ${direccion}`)
    }
    // console.log(resp); //Muestra todo el objeto recuperado en la respuesta... con limitciones de console
    let localizacion = resp.data.results[0];
    let coors = localizacion.geometry.location;

    return {
        direccion: localizacion.formatted_address,
        lat: coors.lat,
        lng: coors.lng,
        cod: resp.data.status
    }
}

module.exports = {
    getLugarLatLng,
    getLugarLatLng1
}