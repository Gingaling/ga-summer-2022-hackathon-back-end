const mongoose = require('../db/connect');
const Schema = mongoose.Schema;

// Schema to make a new book

const PostSchema = new Schema({
	title: { type: String, require: true },
	author: { type: String, require: true },
	createdAt: ,
	updatedAt: ,
	body: String,
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
