var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

var postSchema = new mongoose.Schema({
   title: String,
   content: String
});

var Post = mongoose.model("Post", postSchema);

var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }]
});

var User = mongoose.model("User", userSchema);

User.findOne({email:"bob@gmail.com"}).populate("posts").exec(function(err,user){
   if(err){
       console.log(err);
   } else{
       console.log(user);
   }
});

// Post.create({
//     title: "How to cook the best burguer pt. 3",
//     content: "Blah"
// }, function(err, post){
//     User.findOne({email:"bob@gmail.com"}, function(err, foundUser){
//       if(err){
//           console.log(err);
//       } else{
//           foundUser.posts.push(post);
//           foundUser.save(function(err,data){
//               if(err){
//                   console.log(err);
//               }else{
//                   console.log(data);
//               }
//           });
//       }
//     });
// });

// User.create({
//     email: "bob@gmail.com",
//     name: "Bob Belcher"
// });

// var newUser = new User({
//     email: "hermione@hogwarts.edu",
//     name: "Hermione Granger"
// });

// newUser.posts.push({
//   title: "How to bre polyjuice potion",
//   content: "Just kidding. Go to class"
// });

// newUser.save(function(err, user){
//   if(err) {
//       console.log(err);
//   } else {
//       console.log(user);
//   }
// });

// var newPost = new Post({
//   title: "Reflections on Apples",
//   content: "They r delicious"
// });
// newPost.save(function(err,post){
//   if(err){
//       console.log(err);
//   } else {
//       console.log(post);
//   }
// });

// User.findOne({name: "Hermione Granger"}, function(err,user){
//     if(err){
//         console.log(err);
//     }else{
//         // console.log(user);
//         user.posts.push({
//             title: "3 things I really hate",
//             content: "Voldemort x 3"
//         });
//         user.save(function(err, user){
//             if(err){
//                 console.log(err);
//             }else{
//                 console.log(user);
//             }
//         })
//     }
// })