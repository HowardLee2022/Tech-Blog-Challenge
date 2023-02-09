const express = require('express');
const router = express.Router();
const {Post,User} = require('../models');


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

router.get("/login",(req,res)=>{
    res.render("login")
})

router.get("/create",(req,res)=>{
    res.render("create")
})

router.get("/signup",(req,res)=>{
    res.render("signup")
})

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


router.get("/logout",(req,res)=>{
    res.render("logout")
})

module.exports = router;