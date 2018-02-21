const express = require("express");
const hbs = require("hbs");
let dateFormat = require('dateformat');
let app = express();

let now = new Date();

app.set('view engine', 'hbs');
// app.use(express.static(__dirname + '/public'));
// app.use(express.static('public'));
app.get('/', (req,res)=>{
  res.render('home.hbs', {
    currentTime: dateFormat(now)
  });
});
app.get('/about', (req, res)=>{
  res.render('about.hbs')
})

app.listen(3000, ()=>{
  console.log("Server is Up.");
});
