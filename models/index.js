const Post = require("./Post");
const User = require("./User");

Post.belongsTo(User,{
    onDelete:"CASCADE"
})

User.hasMany(Post)

module.exports ={
    User,
    Post
}