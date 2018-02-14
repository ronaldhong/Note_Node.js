const geocode = require("./request.js")
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
    console.log(JSON.stringify(results, undefined, 2));
  }

})
