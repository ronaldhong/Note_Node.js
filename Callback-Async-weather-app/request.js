const request = require("request");

// console.log(encodeAddress);
// console.log(process.argv[2]);
// console.log(argv);
var geocode=(address, callback)=>{
  var encodeAddress = encodeURIComponent(address)
  request({
    url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`,
    json: true
  },(err, res, body)=>{
    if (err){
      callback("Unable to connect to Google Server, Please make sure the URL is correct.");
    }
    else if(body.status==="ZERO_RESULTS"){
      callback("No Result, Unable to find that address.");
    }
    else if(body.status==="OK"){
      // console.log(body.results[0].geometry.location);
      callback(undefined, {
        Address: body.results[0].formatted_address,
        Coordination: body.results[0].geometry.location
        // Lat: body.results
      });
      // callback(JSON.stringify(body, undefined, 2));
      // console.log(body.status);
    }
  });
}
module.exports.geocode=geocode;
