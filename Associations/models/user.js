var mongoose = require("mongoose");
// USER - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [
        {
        type: mongoose.Schema.Types.ObjectId,//mongoose projectid belonging to Post is included rather than postSchema as attribute in userSchema a
        ref: "Post"
        }
    ]
});
module.exports = mongoose.model("User", userSchema);
