const router = require("express").Router();
const blogs = require("../Models/blogs");

// post
router.post("/post", async (req,res)=>{
    try {
        const { title,desc }= req.body;
        const newPost = new blogs ({title,desc});
        await newPost.save().then(()=> res.status(200).json({message : "data save successfully"}))
    } catch (error) {
        res.status(400).json({message:"some error grt from post route"})
    }
})

module.exports = router;