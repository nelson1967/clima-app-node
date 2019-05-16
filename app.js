const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Nombre de la ciudad y pais para obtener el clima',
        demand: true
    }
}).argv;

// console.log('El comando tiene los sgtes argumentos (yargs module):', argv);
let app = "getClima";
let getInfo = async(direccion) => {
    try {
        //    coors = {lat: -38.735, lng:-72.590, direccion:Temuco', cod:'OK'}; //para simular la llamada a google en getLugarLatLng()
        var coors = await lugar.getLugarLatLng1(direccion);
    } catch (e) {
        return (e);
    }
    try {
        var temp = await clima.getTemp(coors.lat, coors.lng)
    } catch (e) {
        return (e);
    }
    return { lat: coors.lat, lng: coors.lng, direccion: coors.direccion, temp: temp.temp, code: temp.cod, status: coors.cod } //`En "${coors.direccion}" hay una temperatura de ${temp.temp}`;
    // } catch (e) {
    //   return `No se pudo recuperar la temperatura de ${direccion}`;
    // }
}

getInfo(argv.direccion)
    .then(punto => console.log(punto)) //`La temperatura en <${punto.direccion} (${punto.lat},${punto.lng})> (status: ${punto.status}) es de ${punto.temp} grados Celcius (cod:${punto.code})`))
    .catch(e => console.log(app, e));

// lugar.getLugarLatLng(argv.direccion)
//   .then( resp => {console.log(resp);})
//   .catch( e => console.log(e));

// clima.getTemp(-33.4435096, -70.5823057)
//   .then( temp => console.log(temp.temp))
//   .catch( e => console.log(e));


// Key de proyecto NelSoft, generada en Google:
// AIzaSyCteaXg5edJICP3xrRrrzfBW9IPR7FwGGo
// Key de proyecto Mapas, generado en Google, con la cuenta nelson1967@gmail.com y datos de facturación
// AIzaSyD2yvKxeKicV8yHieLLUOyPrNOh4qmPcew

// Nota del curso (ene-2019):
// GoogleMaps cambió la ubicación de la página que usaremos en el siguiente video, pero ahora está aquí
// https://developers.google.com/maps/documentation/geocoding/start
// Google Maps a muchos les está pidiendo datos de facturación para usar el API,
// cosa que están implementando, pero si no quieren ingresar nada,
//pueden usar para desarrollo y seguir el curso, cualquiera de estas API
// AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM
// AIzaSyDzbQ_553v-n8QNs2aafN9QaZbByTyM7gQ
// AIzaSyA5mjCwx1TRLuBAjwQw84WE6h5ErSe7Uj8
// AIzaSyCroCERuudf2z02rCrVa6DTkeeneQuq8TA
// AIzaSyBkDYSVRVtQ6P2mf2Xrq0VBjps8GEcWsLU
// AIzaSyAu2rb0mobiznVJnJd6bVb5Bn2WsuXP2QI
// AIzaSyAZ7zantyAHnuNFtheMlJY1VvkRBEjvw9Y
// AIzaSyDSPDpkFznGgzzBSsYvTq_sj0T0QCHRgwM
// AIzaSyD4YFaT5DvwhhhqMpDP2pBInoG8BTzA9JY
// AIzaSyAbPC1F9pWeD70Ny8PHcjguPffSLhT-YF8