const geocode = require("../Callback-Async-weather-app/request.js")
// const weather= require("./weather_fetch.js")
const yargs = require("yargs");
const axios = require('axios')
let DARKSKY_API="2b0bcb62715d227f1296229fbbcc2dde";



/////request.js
const argv = yargs
  .options({
    a:{
      demand: true,
      alias: 'address',
      describe: "address to fetch weather for",
      string: true,
    }
  })
  .help()
  .alias('help','h')
  .argv;

// console.log(argv.address);
let encodeAddress = encodeURIComponent(argv.address);
// console.log(encodeAddress);
let addressURL= `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`
// console.log(addressURL);
axios.get(addressURL).then((response)=>{
  if (response.data.status==="ZERO_RESULTS"){
    throw new Error("unable to find any result.")
  }

  let lat;
  let lng;
  let weather_url;
  let coordination;
  lat = response.data.results[0].geometry.location.lat;
  lng = response.data.results[0].geometry.location.lng;
  // console.log(lat);
  // console.log(lng);
  coordination=`${lat},${lng}`
  weather_url = `https://api.darksky.net/forecast/${DARKSKY_API}/${coordination}`
  console.log(weather_url);
  // console.log(response.data.results[0].geometry.location.lat);
  return axios.get(weather_url)


  // console.log(response.data.status);
}).then((response)=>{
  console.log("Temperature is currently ",response.data.currently.temperature,"F");
}).catch((error)=>{
  if (error.code=="ENOTFOUND"){
    console.log("Cannot connect to the server");
  }else{
    console.log(error.message);
  }
})
