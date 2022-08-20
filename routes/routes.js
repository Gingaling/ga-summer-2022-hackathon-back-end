const express = require('express');
const router = express.Router();

const {
	getAlPosts,
	createPost,
	getPost,
	updatePost,
	deletePost,
	editTask
} = require('../controllers/post');

router.route('/').get(getAllPosts).post(createPost);
router.route('/:id').get(getPost).patch(updatePost).delete(deletePost);

module.exports = router;
