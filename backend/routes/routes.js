import express from 'express';
import { getAllPosts, getPostDetails, addNewPost } from '../controller/controller.js';

const router = express.Router();

router.get('/posts', getAllPosts);
router.get('/details/:id', getPostDetails);

router.post('/add/post', addNewPost);

export default router;