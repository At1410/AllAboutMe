const express = require('express');
const { createPost, updatePost, deletePost } = require('../controllers/post.controllers');

const router = express.Router();

router.post('/createPost', createPost);
router.put('/updatePost/:id', updatePost);
router.delete('/deletePost/:id', deletePost);

module.exports = router;