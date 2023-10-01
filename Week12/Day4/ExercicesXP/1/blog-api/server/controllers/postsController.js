const postsModel = require('../models/postsModel');

const getAllPosts = async (req, res) => {
  try {
    const posts = await postsModel.getAllPosts();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getPostById = async (req, res) => {
  const id = req.params.id;
  try {
    const post = await postsModel.getPostById(id);
    if (post) {
      res.json(post);
    } else {
      res.status(404).json({ error: 'Post not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const createPost = async (req, res) => {
  const { title, content } = req.body;
  try {
    const newPost = await postsModel.createPost(title, content);
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const updatePost = async (req, res) => {
  const id = req.params.id;
  const { title, content } = req.body;
  try {
    const updatedPost = await postsModel.updatePost(id, title, content);
    if (updatedPost) {
      res.json(updatedPost);
    } else {
      res.status(404).json({ error: 'Post not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const deletePost = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedPost = await postsModel.deletePost(id);
    if (deletedPost) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Post not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
