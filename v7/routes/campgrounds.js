var express = require("express");
var router = express.Router();

var Campground  = require("../models/campground");
//CAMPGROUNDS ROUTES
//INDEX
router.get("/",function(req, res) {
    Campground.find({}, function(err, allCampgrounds) {
        if(err){
            console(err);
        } else {
            res.render("campgrounds/index", {campgrounds: allCampgrounds});
        }
    });
});

//CREATE
router.post("/", function(req, res){
    //get data from form and add to campground array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = {name: name, image: image, description: desc};
    //Create and save to DB the new
    Campground.create(newCampground,function(err, newlyCreated) {
        if(err){
            console.log(err);
        } else {
            //redirect
            res.redirect("/campgrounds");
        }
    });
});

//NEW
router.get("/new",function(req, res) {
    res.render("campgrounds/new");
});

//SHOW
router.get("/:id", function(req, res) {
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err){
            console.log(err);
        } else {
            res.render("campgrounds/show", {campground: foundCampground});
        }
    });
});

module.exports = router;