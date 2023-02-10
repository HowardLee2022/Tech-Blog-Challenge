const express = require('express');
const router = express.Router();
const {Post,comment} = require('../models');
// gets all post
router.get("/",(req,res)=>{
   Post.findAll().then(postData=>{
    res.json(postData)
   }).catch(err=>{
    console.log(err);
    res.status(500).json({msg:"oh noes!",err})
   })
})
// gets all post by param
router.get("/:id",(req,res)=>{
   Post.findByPk(req.params.id,{
    include:[comment]
   }).then(postData=>{
    res.json(postData)
   }).catch(err=>{
    console.log(err);
    res.status(500).json({msg:"oh noes!",err})
   })
})
// creates a post after checking if user is logged in
router.post("/",(req,res)=>{
   if(!req.session.userId){
      return res.status(403).json({msg:"login first post"})
   };
   Post.create({
    title:req.body.title,
    description:req.body.description,
    UserId:req.session.userId
   }).then(postData=>{
    res.json(postData)
   }).catch(err=>{
    console.log(err);
    res.status(500).json({msg:"oh noes!",err})
   })
})
// deletes a post by checking if user is logged in and if the post userid matches session id
router.delete("/:id",(req,res)=>{
   if(!req.session.userId){
      return res.status(403).json({msg:"login first post"})
   }
   Post.findByPk(req.params.id).then(postData=>{
      if(!postData){
         return res.status(404).json({msg:"no such post"})
      } else if(postData.UserId!== req.session.userId){
         return res.status(403).json({msg:"not your post!"})
      }
      Post.destroy({
       where:{
          id:req.params.id,
       }
      }).then(postData=>{
        res.json(postData)
       }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"oh noes!",err})
       })
   }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"oh noes!",err})
   })
})
// updates a existing post by checking if user is logged in and if the post Userid matches session userid
router.put("/:id",(req,res)=>{
   if(!req.session.userId){
      return res.status(403).json({msg:"login first post"})
   }
   Post.findByPk(req.params.id).then(postData=>{
      if(!postData){
         return res.status(404).json({msg:"no such post"})
      } else if(postData.UserId!== req.session.userId){
         return res.status(403).json({msg:"not your post!"})
      }
      Post.update({
         title:req.body.title,
         description:req.body.description
      },{
         where:{
          id:req.params.id,
       }
      }).then(postData=>{
        res.json(postData)
       }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"oh noes!",err})
       })
   }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"oh noes!",err})
   })
})


module.exports = router;