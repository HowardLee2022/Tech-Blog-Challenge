const express = require('express');
const router = express.Router();

const userRoutes = require('./userController');
router.use("/api/users",userRoutes);

const postRoutes = require('./PostController');
router.use("/api/posts",postRoutes);

const frontEndRoutes = require('./frontEndController');
router.use("/",frontEndRoutes);

const commentRoutes=require("./commentController");
router.use("/api/comments", commentRoutes);

module.exports = router;