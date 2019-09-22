var express = require("express");
var app = express();

app.get("/",function(req,res){
    res.send("Hi there, welcome to my assignment!")
});

app.get("/speak/:animal",function(req,res){
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof woof",
        cat: "I hate you human",
        goldfish: "..."
    }
    res.send("The " + req.params.animal + " says '" + sounds[req.params.animal] +"!'")
});

app.get("/repeat/:message/:times",function(req,res){
    var result = ""
    for (var i =0; i <= Number(req.params.times); i++) {
        result += req.params.message + " ";
    }
    res.send(result)
});

app.get("*", function(req, res) {
   res.send("Sorry, page not found... What are you doing with your life?") 
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!");
});