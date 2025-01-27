import express from 'express';
import { createPost, deletePost, editPost } from '../controller/admin_controller.js';
const router = express.Router()

router.post('/posts', createPost);
router.put('/posts/:id', editPost);
router.delete('/posts/:id', deletePost);

export default router;