const express = require ("express");
const app = express();
const path = require("path");
const hbs = require ("hbs");
const port = process.env.PORT || 8000;

const staticPath = path.join(__dirname,"../public") 
const view_path = path.join(__dirname,"../templates/views") 
const partial_path = path.join(__dirname,"../templates/partials")

app.set("view engine","hbs");
app.set('views',view_path);
hbs.registerPartials(partial_path);

app.use(express.static(staticPath));





app.get("/",(req,res) =>{
    res.render('index')
})

app.get("/about",(req,res) =>{
    res.render('about')
})

app.get("/weather",(req,res) =>{
    res.render("weather")
})

app.get("*",(req,res) =>{
    res.render('404error',{
        errorMsg:"Oops! Page not found"
    })
})

app.listen(port,() =>{
    console.log(`listening to the port at ${port}`);
})