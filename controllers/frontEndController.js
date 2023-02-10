const express = require('express');
const router = express.Router();
const {Post,User,comment} = require('../models');

//Render to home handlebar at localhost:3000
router.get("/",(req,res)=>{
    Post.findAll({
        include:[User]
    }).then(userdata=>{
        const hbsData = userdata.map(user=>user.toJSON());
        console.log('==============================')
        console.log(hbsData);
        res.render("home",{
            userdate:hbsData})
    })
})
// renders to login handlebar
router.get("/login",(req,res)=>{
    res.render("login")
})
// renders to create handlebar
router.get("/create",(req,res)=>{
    res.render("create")
})
// renders to signup handlebar
router.get("/signup",(req,res)=>{
    res.render("signup")
})
// renders to dashboard handlebar after sending the user data back
router.get("/dashboard",(req,res)=>{
    if(!req.session.userId){
        return res.redirect("/")
    }
    User.findByPk(req.session.userId,{
        include:[Post]
    }).then(userdata=>{
        console.log(userdata)
        const hbsData = userdata.toJSON();
        console.log('==============================')
        console.log(hbsData)
        res.render("dashboard",hbsData)
    })
})
// renders to logout handlebar
router.get("/logout",(req,res)=>{
    res.render("logout")
})
// renders to edit handle bar then sends back post and user data from the ID
router.get('/edit/:id', (req, res) => {
    Post.findByPk(req.params.id,{
        include:[User]
    }).then(postData=>{
        res.render("edit",{
            post:postData.toJSON(),
        })
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"oh noes!",err})
    })
  });
//renders to view handle bar then sends back post and comment data from the POST ID
router.get('/view/:id', (req, res) => {
    Post.findByPk(req.params.id,{
        include:[{
            model:comment,
            include:[User]
        }]
    }).then(postData=>{
        console.log(postData.toJSON())
        res.render("view",{
            post:postData.toJSON(),
        })
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"oh noes!",err})
    })
  });

router.get("/hello",(req,res)=>{
    comment.findAll(
        {include:[Post,User]}
    ).then(postData=>{
     res.json(postData)
    }).catch(err=>{
     console.log(err);
     res.status(500).json({msg:"oh noes!",err})
    })
 })
 

module.exports = router;