import express from 'express';
import { getAllPosts, getPostDetails, getComments, getReplies, addNewPost, addNewComment } from '../controller/controller.js';

const router = express.Router();

router.get('/posts', getAllPosts);
router.get('/details/:id', getPostDetails);
router.get('/comments/:id', getComments);
router.get('/replies/:id', getReplies);

router.post('/add/post', addNewPost);
router.post('/add/comment', addNewComment);

export default router;