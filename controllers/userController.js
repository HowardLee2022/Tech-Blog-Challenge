const express = require('express');
const router = express.Router();
const {User} = require('../models');
const bcrypt = require("bcrypt");


// logs out by destroying session
router.get("/logout",(req,res)=>{
    req.session.destroy();
    res.send("logged out")
})
// creates a new account and then login as created account
router.post("/",(req,res)=>{
   User.create({
    email:req.body.email,
    password:req.body.password
   }).then(userData=>{
    req.session.userId = userData.id;
    req.session.userEmail = userData.email;
    res.json(userData)
   }).catch(err=>{
    console.log(err);
    res.status(500).json({msg:"oh noes!",err})
   })
})
//login by matching the login detail to a existing user in db
router.post("/login",(req,res)=>{
   User.findOne({
   where:{
    email:req.body.email
   }
   }).then(userData=>{
    if(!userData){
        return res.status(401).json({msg:"incorrect email or password"})
    } else {
        if(bcrypt.compareSync(req.body.password,userData.password)){
            req.session.userId = userData.id;
            req.session.userEmail = userData.email;
            return res.json(userData)
        } else {
            return res.status(401).json({msg:"incorrect email or password"})
        }
    }
   }).catch(err=>{
    console.log(err);
    res.status(500).json({msg:"oh noes!",err})
   })
})



module.exports = router;