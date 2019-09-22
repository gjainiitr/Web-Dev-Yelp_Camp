var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2");

var Post = require("./models/post");
var User = require("./models/user");


Post.create({
    title: "How to cook the best burguer pt. 4",
    content: "Blah blah"
}, function(err, post){
    User.findOne({email:"bob@gmail.com"}, function(err, foundUser){
      if(err){
          console.log(err);
      } else{
          foundUser.posts.push(post);
          foundUser.save(function(err,data){
              if(err){
                  console.log(err);
              }else{
                  console.log(data);
              }
          });
      }
    });
});
