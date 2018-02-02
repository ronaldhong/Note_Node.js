console.log("Starting App");

const fs = require('fs');
const os = require('os');
const _ = require('lodash')
const note_list= require('./list.js')
////
var user = os.userInfo();
console.log(user);
////
////
// fs.appendFile('greeting.txt', `Hello! ${user.username}`, function(err){
//   if (err){
//     console.log("Can not append file.");
//   }
// });
////
/////LODASH TESTING
console.log(_.isString("Check"));
console.log(_.uniq(["Andrew","1","Andrew","2","3","1"]));
// console.log(process.argv);
// console.log(note_list.add(1,3));
