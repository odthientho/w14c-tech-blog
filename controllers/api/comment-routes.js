const router = require('express').Router();
const Comment = require('../../models/Comment');
const withAuth = require('../../utils/auth');

router.post("/", withAuth, async (req, res) => {
    var post_id = req.body.post_id;
    var content = req.body.content;
    var user_id = req.session.user_id;
    try {
        const commentData = await Comment.create({
          content: content,
          post_id: post_id,
          user_id: user_id
        });
        res.status(200).json(commentData);
    } catch (err) {
      res.status(400).json(err);
    }
});

module.exports = router;