const express = require('express');
const router = express.Router();

const { getFeedPosts, getUserPosts, likePost } = require('../controllers/posts');
const { verifyToken } = require('../middlewares/auth');

/* GET ALL POSTS from the db*/
router.route('/').get(verifyToken, getFeedPosts);

/* GET ALL POSTS from the one particular user */
router.route('/:userId').get(verifyToken, getUserPosts);

/* LIKE A POST */
router.route('/:id/like').patch(verifyToken, likePost);

module.exports = router;
