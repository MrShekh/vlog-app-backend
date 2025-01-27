import Post from '../models/post_models.js';
export const createPost = async (req, res) => {
    try {
      const id=req.params.id;
    console.log(id);
      const newPost = await Post.create({ title, content, author: req.user._id });
      res.status(201).json(newPost);
    } catch (error) {
      res.status(500).json({ message: 'Error creating post', error });
    }
  };