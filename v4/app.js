var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    Campground = require("./models/campground"),
    Comment = require("./models/comment"),
    seedDB = require("./seeds");
    
seedDB();
mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");


app.get("/",function(req, res){
    res.render("landing")
});

//CAMPGROUNDS ROUTES
//INDEX
app.get("/campgrounds",function(req, res) {
    Campground.find({}, function(err, allCampgrounds) {
        if(err){
            console(err);
        } else {
            res.render("campgrounds/index", {campgrounds: allCampgrounds});
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
    res.render("campgrounds/new");
});

//SHOW
app.get("/campgrounds/:id", function(req, res) {
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err){
            console.log(err);
        } else {
            res.render("campgrounds/show", {campground: foundCampground});
        }
    });
});

// COMMENTS ROUTES

app.get("/campgrounds/:id/comments/new", function(req, res) {
    Campground.findById(req.params.id, function(err, campground){
       if(err){
           
       } else{
           res.render("comments/new",{campground: campground});
       }
    });
});

app.post("/campgrounds/:id/comments", function (req, res){
    Campground.findById(req.params.id, function(err, campground) {
       if(err){
           console.log(err);
           res.redirect("/campgrounds");
       } else{
           Comment.create(req.body.comment, function(err,comment){
               if(err){
                   console.log(err);
               }else{
                   campground.comments.push(comment);
                   campground.save();
                   res.redirect("/campgrounds/" + campground._id);
               }
           });
       }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp server has started!")
});