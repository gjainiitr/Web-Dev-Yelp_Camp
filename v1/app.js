var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var campgrounds = [
        {name: "Salmon Creek", image: "https://images.unsplash.com/photo-1496425745709-5f9297566b46?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b084690f83c5e63fafd161f8bc729a1f&auto=format&fit=crop&w=500&q=60"},
        {name: "Granite Hill", image: "https://images.unsplash.com/photo-1455496231601-e6195da1f841?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4d1156d3e4dfafbc71a9f293939f3243&auto=format&fit=crop&w=500&q=60"},
        {name: "Mountain Goat's Rest", image: "https://images.unsplash.com/photo-1483381719261-6620dfa2d28a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b201f4cac49215d2be151bb4d5bc454f&auto=format&fit=crop&w=500&q=60"}
    ];

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
    
app.get("/",function(req, res){
    res.render("landing")
});

app.get("/campgrounds",function(req, res) {
    res.render("campgrounds", {campgrounds: campgrounds});
})

app.post("/campgrounds", function(req, res){
    //get data from form and add to campground array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image}
    campgrounds.push(newCampground);
    //redirect
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new",function(req, res) {
    res.render("new.ejs");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp server has started!")
});