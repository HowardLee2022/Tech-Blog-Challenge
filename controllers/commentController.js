const express = require('express');
const router = express.Router();
const {Post,comment,User} = require('../models');

router.get("/",(req,res)=>{
   comment.findAll().then(commentData=>{
    res.json(commentData)
   }).catch(err=>{
    console.log(err);
    res.status(500).json({msg:"oh noes!",err})
   })
})

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

// router.post("/",(req,res)=>{
//    // if(!req.session.userId){
//    //    return res.status(403).json({msg:"login first post"})
//    // }
//    // console.log(req.body);
//    comment.create({
//     comment:req.body.comment,
//     UserId:req.body.UserId,
//     PostId:req.body.PostId
//    }).then(commentData=>{
//     res.json(commentData)
//    }).catch(err=>{
//     console.log(err);
//     res.status(500).json({msg:"oh noes!",err})
//    })
// })


module.exports = router;