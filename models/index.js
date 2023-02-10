const Post = require("./Post");
const User = require("./User");
const comment = require("./comments")

Post.belongsTo(User,{
    onDelete:"CASCADE"
})
User.hasMany(Post)


Post.hasMany(comment)
comment.belongsTo(Post,{
    onDelete:"CASCADE"
})

User.hasMany(comment)
comment.belongsTo(User,{
    onDelete:"CASCADE"
})



module.exports ={
    User,
    Post,
    comment
}