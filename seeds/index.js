const sequelize = require("../config/connection")
const {User,Post} = require("../models")

const seed = async ()=>{
    await sequelize.sync({force:true});
    const users = await User.bulkCreate([
        {
            email:"Howard1@howard.com",
            password:"password"
        },
        {
            email:"Jackie1@jackie.com",
            password:"password1"
        }
    ],{
        individualHooks:true
    })

    const posts = await Post.bulkCreate([
        {
            title:"Tofu is cool",
            description:"tofu loves poop",
            UserId:1
        },
        {
            title:"Tofu Loves",
            description:"Tofu loves socks, Tofu loves treats, Tofu loves food",
            UserId:2
        }
    ])
    process.exit(1)
}

seed();