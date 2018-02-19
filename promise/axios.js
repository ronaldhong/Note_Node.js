const geocode = require("../Callback-Async-weather-app/request.js")
// const weather= require("./weather_fetch.js")
const yargs = require("yargs");
const axios = require('axios')



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

  // let
  console.log(response.data.results[0].geometry);


  // console.log(response.data.status);
}).catch((error)=>{
  if (error.code=="ENOTFOUND"){
    console.log("Cannot connect to the server");
  }else{
    console.log(error.message);
  }
})
