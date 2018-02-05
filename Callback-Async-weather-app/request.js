const request = require("request");
const yargs = require("yargs");
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
// console.log(argv.address);
var encodeAddress = encodeURIComponent(argv.address)
// console.log(encodeAddress);
// console.log(process.argv[2]);
// console.log(argv);
request({
  url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`,
  json: true
},(err, res, body)=>{
  if (err){
    console.log("Unable to connect to Google Server, Please make sure the URL is correct.");
  }
  else if(body.status==="ZERO_RESULTS"){
    console.log("No Result, Unable to find that address.");
  }
  else{
    console.log(JSON.stringify(body, undefined, 2));
    // console.log(body.status);
  }
});
