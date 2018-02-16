const request = require("request");

let geocodeAddress = (address)=>{
  return new Promise((resolve, reject)=>{
    var encodeAddress = encodeURIComponent(address)
    console.log(encodeAddress);
    request({
      url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`,
      json: true
    },(err, res, body)=>{
      if (err){
        console.log(err);
        reject("Unable to connect to Google Server, Please make sure the URL is correct.");
      }
      else if(body.status==="ZERO_RESULTS"){
        console.log(body);
        reject("No Result, Unable to find that address.");
      }
      else if(body.status==="OK"){
        // console.log(body.results[0].address_components);
        // console.log(body.results[0].geometry.location);
        console.log("200");
        resolve({
          address: body.results[0].formatted_address,
          lat: body.results[0].geometry.location.lat,
          lng:body.results[0].geometry.location.lng
        });
        // callback(JSON.stringify(body, undefined, 2));
        // console.log(body.status);
      }
    });
  })
}

geocodeAddress("8507 Rowan Ln").then((location)=>{
  console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage)=>{
  console.log(errorMessage);
})
