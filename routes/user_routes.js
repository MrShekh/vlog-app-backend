import express from 'express';
import { createPost } from '../controller/user_contoller.js';

const router = express.Router();

router.post('/users/:id', createPost);
export default router;