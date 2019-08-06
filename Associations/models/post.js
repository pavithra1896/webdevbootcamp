//using these models in separate files to shorten references.js code
var mongoose = require("mongoose");

// POST - title, content
var postSchema = new mongoose.Schema({
   title: String,
   content: String
});
module.exports = mongoose.model("Post", postSchema);
//think of module as a return value for a file.So just like with the return value in a function nothing is returned unless
//we explicitly tell javascript what we want to return out of the function.
//Same thing with the file if we just include the file but we don't export anything out of it.
//We'll actually be including Nothing will be requiring just an empty file.
//What we need to do is export something and what we want to export is the model.
