const express = require('express');
const router = express.Router();
const {comment,User} = require('../models');
// gets all comment
router.get("/",(req,res)=>{
   comment.findAll().then(commentData=>{
    res.json(commentData)
   }).catch(err=>{
    console.log(err);
    res.status(500).json({msg:"oh noes!",err})
   })
})
// gets comment by id
router.get("/:id",(req,res)=>{
   comment.findByPk(req.params.id,{
    include:[User]
   }).then(commentData=>{
    res.json(commentData)
   }).catch(err=>{
    console.log(err);
    res.status(500).json({msg:"oh noes!",err})
   })
})
// creates comment
router.post("/",(req,res)=>{
   if(!req.session.userId){
      return res.status(403).json({msg:"login first post"})
   }
   console.log(req.body);
   comment.create({
    comment:req.body.comment,
    PostId:req.body.PostId,
    UserId:req.session.userId
   }).then(commentData=>{
    res.json(commentData)
   }).catch(err=>{
    console.log(err);
    res.status(500).json({msg:"oh noes!",err})
   })
})

module.exports = router;