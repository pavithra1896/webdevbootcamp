var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2");

var Post = require("./models/post");
var User = require("./models/user");
//create a post,find a user created before,push the post to that user and save the user.
Post.create({
  title: "How to cook the best burger pt. 4",
  content: "AKLSJDLAKSJD"
}, function(err, post){
    User.findOne({email: "bob@gmail.com"}, function(err, foundUser){
        if(err){
            console.log(err);
        } else {
            foundUser.posts.push(post);
            foundUser.save(function(err, data){
                if(err){
                    console.log(err);
                } else {
                    console.log(data);
                }
            });
        }
    });
});
//when running the code,we get ->{ posts: [1236458376y3487],
//                                   _v:1,
//                                   name:Bob Belcher,
//                                   email:bob@gmail.com,
//                                   _id:2726938ru340jnf}

// Find user
// find all posts for that user.Now to get back posts from the object id
//So we're finding a user.And then we're changing this populate posts which will actually populate the field posts in user model, look up all
//those object IDs find the correct data and then stick it in the post array in user model and then we run exec to actually
//start the query.
// User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, user){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });
//when running the code,we get ->{  posts: { _v:0,
//                                           title: "How to cook the best burger pt. 4",
//                                           content: "AKLSJDLAKSJD",
//                                           _id:  587o86yig88},
//                                   _v:1,
//                                   name:Bob Belcher,
//                                   email:bob@gmail.com,
//                                   _id:2726938ru340jnf}


// User.create({
//     email: "bob@gmail.com",
//     name: "Bob Belcher"
// });
