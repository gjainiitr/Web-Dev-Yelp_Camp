var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");
    
mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

//SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
    name:  String,
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create({
//     name: "Salmon Creek",
//     image: "https://images.unsplash.com/photo-1496425745709-5f9297566b46?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b084690f83c5e63fafd161f8bc729a1f&auto=format&fit=crop&w=500&q=60",
//     description: "This is a huge salmon river, no bathrooms."
// }, function(err, campground) {
//     if(err){
//         console.log(err);
//     } else {
//         console.log("NEWLY CREATED CAMPGROUND: ");
//         console.log(campground);
//     }
// });

app.get("/",function(req, res){
    res.render("landing")
});

//INDEX
app.get("/campgrounds",function(req, res) {
    Campground.find({}, function(err, allCampgrounds) {
        if(err){
            console(err);
        } else {
            res.render("index", {campgrounds: allCampgrounds});
        }
    })
})

//CREATE
app.post("/campgrounds", function(req, res){
    //get data from form and add to campground array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description
    var newCampground = {name: name, image: image, description: desc}
    //Create and save to DB the new
    Campground.create(newCampground,function(err, newlyCreated) {
        if(err){
            console.log(err);
        } else {
            //redirect
            res.redirect("/campgrounds");
        }
    })
});

//NEW
app.get("/campgrounds/new",function(req, res) {
    res.render("new.ejs");
});

//SHOW
app.get("/campgrounds/:id", function(req, res) {
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            console.log(err);
        } else {
            res.render("show", {campground: foundCampground})
        }
    });
})

app.listen(5000, function(){
    console.log("The YelpCamp server has started!")
});