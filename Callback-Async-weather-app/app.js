const geocode = require("./request.js")
const weather= require("./weather_fetch.js")
const yargs = require("yargs");



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
  .argv
let address = geocode.geocode(argv.address, (errorMessage, results)=>{
  if (errorMessage){
    console.log(errorMessage);
  }else{
    console.log(JSON.stringify(results.address, undefined, 3))
    // console.log(results.lat);
    // console.log(results.lng);
    weather.weather(results.lat, results.lng,(errorMessage, weather_results)=>{
      // console.log(JSON.stringify(weather_results, undefined, 3));
      console.log(`The weather in ${results.address} is currently ${weather_results.weather.summary}`);
      console.log(`Temperature: ${weather_results.weather.temperature}F`);
    })
    // console.log(JSON.stringify(results, undefined, 3));
  }

})
