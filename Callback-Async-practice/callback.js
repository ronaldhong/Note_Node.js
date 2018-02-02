// import "isomorphic-fetch";
require('es6-promise').polyfill();
require('isomorphic-fetch');

fetch("https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia")
.then(function(res){
  if (!res.ok) {
    throw Error(res.statusText);
  }
  return res;
})
.then(function(res){
  return res.json();
  // console.log(res);
})
.then(function(result){
  console.log(result.results[0].formatted_address);
})
.catch(function(err){
  console.log(err);
})
