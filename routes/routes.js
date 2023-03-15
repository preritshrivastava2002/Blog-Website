const express = require('express');
const router = express.Router();
const {findPost, newPost, post, deletePost, updatePage, updatePost} = require("../controller/controller");
const Blog = require("../models/post");

router.use(express.urlencoded({extended: true}));
router.use(express.json());

//home page
router.get("/", findPost);

//about page
router.get("/about", (req, res) => {
    res.render("about");
});

//contact page
router.get("/contact", (req, res) => {
    res.render("contact");
});

//compose page
router.get("/compose", (req, res) => {
    res.render("compose");
});
router.post("/compose", newPost);

//shows individual post on clicking
router.get("/posts/:id", post);

//delete post
router.post("/delete/:id", deletePost);

//update post
router.get("/update/:id", updatePage);
router.post("/update/:id", updatePost);

module.exports = router;