const router = require('express').Router();
const withAuth  = require('../utils/auth');
const Post = require('../models/Post');
const User = require('../models/User');
const Comment = require('../models/Comment');

router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({ include: User });
    const commentData = await Comment.findAll({ include: User});
    var posts = postData.map((post) => post.get({ plain: true }));
    var comments = commentData.map((comment) => comment.get({plain:true}));

    posts = posts.map((post) => {
      post.comments = comments.filter(comment => comment.post_id == post.id);
      return post;
    });

    res.render('home', {
      posts: posts,
      user_id: req.session.user_id,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/dashboard', withAuth, async (req, res) => {
  const postData = await Post.findAll({ 
      where: {
          user_id: req.session.user_id,
      },
      include: User,
  });
  var posts = postData.map((post) => post.get({ plain: true }));
  const commentData = await Comment.findAll({ include: User});
  var comments = commentData.map((comment) => comment.get({plain:true}));

  posts = posts.map((post) => {
    post.comments = comments.filter(comment => comment.post_id == post.id);
    return post;
  });

  res.render('dashboard', {
      posts: posts,
      user_id: req.session.user_id,
      logged_in: req.session.logged_in,
  });
});



router.get("/newpost", async (req, res) => {
  try {
      res.render('post', {
          action: "new",
          post: { posts: [] },
          user_id: req.session.user_id,
          logged_in: req.session.logged_in,
      });    
  } catch (err) {
      res.status(400).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('authentication', {
      action: "Login"
    });
});

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('authentication', {
      action: "Sign Up"
    });
});

module.exports = router;
