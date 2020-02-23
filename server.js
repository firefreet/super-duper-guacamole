const express = require('express');
const handle = require('express-handlebars');
const routes = require('./controllers/burgerController')

var PORT = process.env.PORT || 8080;

// create instance of express
var app = express();

// static content files for frontend
app.use(express.static("public"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// set up express to use handlebars
app.engine("handlebars",handle({defaultLayout: "main"}));
app.set("view engine","handlebars");
app.use(routes);

app.listen(PORT, ()=>{
    console.log("Server listening on: http://localhost:" + PORT);
});