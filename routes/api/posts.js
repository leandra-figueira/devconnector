const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Post = require("../../models/Post");

// @route  GET api/posts/test
// @desc   Tests Posts route
// @access Public
router.get("/test", (req, res) => res.json({ msg: "Posts works" }));

// @route  POST api/posts
// @desc   Create Post
// @access Private
router.post(
    "/",
    passport.authenticate("jwt", { session: false }), (req, res) => {
        const newPost = new Post({
            text:
        })
    });

module.exports = router;