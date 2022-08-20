const express = require('express');
const router = express.Router();

const Post = require('../models/Post');

// Get all Posts

router.get('/', async (req, res) => {
	try {
		const posts = await Post.find();
		if (posts) {
			res.json(posts);
		} else {
			res.sendStatus(404);
		}
	} catch (error) {
		console.log(error);
	}
});

// Get post by genre and random

router.get('/genre/:genre/random', async (req, res) => {
	try {
		const posts = await Post.find({ genre: req.params.genre });
		const randomIndex = Math.floor(Math.random() * posts.length);
		console.log(req.params.genre);
		if (posts) {
			res.json(posts[randomIndex]);
		} else {
			res.sendStatus(404);
		}
	} catch (error) {
		console.log(error);
	}
});

// Get Post by Genre

router.get('/genre/:genre', async (req, res) => {
	try {
		const posts = await Post.find({ genre: req.params.genre });
		console.log(req.params.genre);
		if (posts) {
			res.json(posts);
		} else {
			res.sendStatus(404);
		}
	} catch (error) {
		console.log(error);
	}
});

// Get Post by ID

router.get('/:id', async (req, res) => {
	try {
		const posts = await Post.findById(req.params.id);
		if (posts) {
			res.json(posts);
		} else {
			res.sendStatus(404);
		}
	} catch (error) {
		console.log(error);
	}
});

// create new Post

router.post('/', (req, res) => {
	const newPost = req.body;
	Post.create(newPost).then(post => {
		res.json(post);
	});
});

// Update Post by Id

router.put('/:id', async (req, res) => {
	try {
		const updatedPost = req.body;
		const updatedDocument = await Post.findByIdAndUpdate(
			req.params.id,
			updatedPost,
			{ new: true }
		);
		res.json(updatedDocument);
	} catch (error) {
		console.log(error);
	}
});

//  Delete Post by ID

router.delete('/:id', async (req, res) => {
	try {
		const deletePost = await Post.findByIdAndDelete(req.params.id);
		res.json(deletePost);
	} catch (error) {
		console.log.error;
	}
});

module.exports = router;
