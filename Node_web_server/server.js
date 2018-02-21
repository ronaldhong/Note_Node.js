const express = require("express");
const hbs = require("hbs");
let dateFormat = require('dateformat');
let app = express();

let now = new Date();
let WelcomeMessage = "welcome, user!"
hbs.registerPartials(__dirname + "/views/partials")
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

///EXPRESS MIDDLEWARE EXAMPLE
// app.use((req,res,next)=>{
//   res.render("maintenance.hbs");
// });

hbs.registerHelper("currentTime",()=>{
  return dateFormat(now)
})
hbs.registerHelper("screamIt",(text)=>{
  return text.toUpperCase();
})
app.get('/', (req,res)=>{
  res.render('home.hbs',{
    WelcomeMessage
  });
});

app.get('/about', (req, res)=>{
  res.render('about.hbs')
})

app.listen(3000, ()=>{
  console.log("Server is Up.");
});
