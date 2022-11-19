const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middlewares/auth');
const { getUser, getUserFriends, addRemoveFriend } = require('../controllers/users');

/* READ USER'S DATA FROM DB */
router.route('/:id').get(verifyToken, getUser);
router.route('/:id/friends').get(verifyToken, getUserFriends);

/* UPDATE USER'S DATA IN DB */
router.route('/:id/:friendId').patch(verifyToken, addRemoveFriend);

module.exports = router;
