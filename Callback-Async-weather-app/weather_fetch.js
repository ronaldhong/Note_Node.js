const request = require("request");
let DARKSKY_API="2b0bcb62715d227f1296229fbbcc2dde";
let weather=(lat, lng, callback)=>{
  let Coordination=`${lat},${lng}`
  request({
    url: `https://api.darksky.net/forecast/${DARKSKY_API}/${Coordination}`,
    // url: "https://api.darksky.net/forecast/2b0bcb62715d227f1296229fbbcc2dde/29.7003538,-9553472312",
    json:true
  },(err, res ,body)=>{
    if (err){
      callback("Unable to connect to Forecast.io server.")
    }else if(res.statusCode===400){
      // console.log(res.statusCode);
      callback(undefined, "Bad request. the location you enter is invlaid.")
    }else{
      // console.log(res.statusCode);
      callback(undefined, {weather: body.currently})
    }
  })

}
module.exports.weather = weather;
