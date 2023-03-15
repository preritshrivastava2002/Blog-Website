const Blog = require("../models/post");

exports.findPost = async(req,res)=>{
    const result = await Blog.find({});
    res.render("home",{
        home: "Home",
        journal: result
    });
}

exports.newPost = async(req,res)=>{
    const blog = new Blog({
        title: req.body.postTitle,
        body: req.body.postBody
    });
    const result = await Blog.insertMany([blog]);
    console.log(result);
    res.redirect("/");
}

exports.deletePost = async(req,res)=>{
    try{
        const requestedid = req.params.id;
    
        const result = await Blog.deleteOne({_id: requestedid});
        console.log("Deleted successfully");
        res.redirect("/");
    }
    catch(err){
        console.log(err);
    }
}

exports.updatePage = async(req,res)=>{
    const requestedid = req.params.id;
    // const result = Blog.findOneAndUpdate({id: req.params.id});
    // res.render("update", {thisPost: result});
    Blog.findById(requestedid, (err,result)=>{
        // console.log(result);
        res.render('update' , {thisPost : result});
    })
}

exports.updatePost = async(req,res)=>{
    const requestedid = req.params.id;

    const updatedTitle = req.body.title;
    const updatedBody = req.body.content;

    const result = await Blog.findOneAndUpdate({requestedid},{
        $set:{
            title: updatedTitle,
            body: updatedBody
        }
    });

    res.redirect("/");
}

exports.post = async (req, res) => {
    const requestedid = req.params.id;

    const result = await Blog.findById(requestedid);
    res.render("post",{thisPost : result});
}