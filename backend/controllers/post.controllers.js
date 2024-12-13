const Post = require('../models/post.model');

const createPost = async (req, res) => {
    const {
        titlePost, contentPost, imagePost, author
    } = req.body;

    try {
        const newPost = new Post({
            titlePost,
            contentPost,
            imagePost,
            author
        });

        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const updatePost = async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;

    try {
        const updatedPost = await Post.findByIdAndUpdate(
            id,
            updateData,
            {
                new: true,
                runValidators: true,
            });

        if (!updatedPost) {
            return res.status(404).json({ error: 'Bài viết không tồn tại!' });
        }

        res.status(200).json(updatedPost);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deletePost = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedPost = await Post.findByIdAndDelete(id);

        if (!deletedPost) {
            return res.status(404).json({ error: 'Bài viết không tồn tại!' });
        }
        res.status(200).json({ message: 'Xoá bài viết thành công!' });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    createPost,
    updatePost,
    deletePost
};