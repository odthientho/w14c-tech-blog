const router = require('express').Router();
const withAuth = require('../../utils/auth');
const Post = require('../../models/Post');
const User = require('../../models/User');
const Comment = require('../../models/Comment');

router.get("/:post_id", withAuth, async (req, res) => {
    try {
        console.log("here here", req.params.post_id);
        var postData = await Post.findByPk(req.params.post_id, { include: User });
        if (!postData) {
            res.redirect('/');
            return;
        }
        postData = postData.get({plain:true});
        if (postData.user_id !== req.session.user_id) {

        }
        var commentData = await Comment.findAll({ include: User });
        var comments = commentData.map((comment) => comment.get({plain:true}));
        postData.comments = comments.filter(comment => comment.post_id == postData.id);
        var posts = [];
        posts.push(postData);
        res.render('comment', {
            posts: posts,
            user_id: req.session.user_id,
            logged_in: req.session.logged_in,
        });    
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get("/:post_id/edit", withAuth, async (req, res) => {
    try {
        var postData = await Post.findByPk(req.params.post_id, { include: User });
        if (!postData) {
            res.redirect('/');
            return;
        }
        var post = postData.get({plain:true});
        if (post.user_id !== req.session.user_id) {
            res.redirect('/dashboard');
            return;
        }
        var commentData = await Comment.findAll({ include: User });
        var comments = commentData.map((comment) => comment.get({plain:true}));
        post.comments = comments.filter(comment => comment.post_id == postData.id);
        res.render('post', {
            action: "edit",
            post: post,
            user_id: req.session.user_id,
            logged_in: req.session.logged_in,
        });    
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put("/:post_id", withAuth, async (req, res) => {
    try {
        var post_id = req.params.post_id;
        var title = req.body.title;
        var content = req.body.content;
        var user_id = req.session.user_id;

        var postData = await Post.update(
        {
            title: title,
            content: content
        },
        {
            where: { id: post_id, user_id: user_id}
        });

        if (!postData) res.redirect('/dashboard');
        else res.status(200).json(postData);

    } catch (err) {
        res.status(400).json(err);
    }
});

router.post("/", withAuth, async (req, res) => {
    try {
        var title = req.body.title;
        var content = req.body.content;
        var user_id = req.session.user_id;

        var postData = await Post.create({
            title: title,
            content: content,
            user_id: user_id
        });

        if (!postData) res.redirect('/dashboard');
        else res.status(200).json(postData);

    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete("/:post_id", withAuth, async (req, res) => {
    try {
        var post_id = req.params.post_id;
        var user_id = req.session.user_id;

        var postData = await Post.destroy({
            where: { 
                id: post_id,
                user_id: user_id
            }
        });

        if (!postData) res.redirect('/dashboard');
        else res.status(200).json(postData);

    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;