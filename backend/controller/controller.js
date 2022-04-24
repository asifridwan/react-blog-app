import pool from '../database/connection.js';
import { v1 as uuidv1, v4 as uuidv4 } from 'uuid';

export const getAllPosts = (req, res) => {
    pool.query('SELECT id, title, post_date FROM posts ORDER BY post_date DESC', (error, result) => {
        if (error) {
            res.send(error);
        }

        res.status(200).send(result.rows);
    });
}

export const getPostDetails = (req, res) => {
    const {id} = req.params;

    pool.query('SELECT * FROM posts WHERE id = $1', [id], (error, result) => {
        if (error) {
            res.send(error);
        }

        if (result.rows.length > 0) {
            res.status(200).send(result.rows);
        }
        else {
            res.send('Not Found');
        }
    });
}

export const getComments = (req, res) => {
    const {id} = req.params;

    pool.query('SELECT id, author, body, comment_date, parent FROM comments WHERE post_id = $1 ORDER BY comment_date DESC', [id], (error, result) => {
        if (error) {
            res.send(error);
        }

        res.status(200).send(result.rows);
    });
}

export const getReplies = (req, res) => {
    const {id} = req.params;

    pool.query('SELECT id, author, body, comment_date FROM comments WHERE parent = $1 ORDER BY comment_date ASC', [id], (error, result) => {
        if (error) {
            res.send(error);
        }

        res.status(200).send(result.rows);
    });
}

export const addNewPost = (req, res) => {
    const id = uuidv1();
    const {title, body, post_date} = req.body;

    if (title && body && post_date) {
        if (body.length > 55000) {
            res.send('Content cannot exceed 55000 characters');
        }
        else {
            pool.query('INSERT INTO posts (id, title, body, post_date) VALUES ($1, $2, $3, $4)', [id, title, body, post_date], (error, result) => {
                if (error) {
                    res.send(error);
                }

                res.status(200).send('Success');
            });
        }
    }
    else {
        res.send('Required fields cannot be empty');
    }
}

export const addNewComment = (req, res) => {
    const id = uuidv4();
    const {author, body, comment_date, post_id, parent} = req.body;

    if (parent) {
        pool.query('INSERT INTO comments (id, author, body, comment_date, post_id, parent) VALUES ($1, $2, $3, $4, $5, $6)', [id, author, body, comment_date, post_id, parent], (error, result) => {
            if (error) {
                res.send(error);
            }

            res.status(200).send('Success');
        });
    }
    else {
        const root = null;

        pool.query('INSERT INTO comments (id, author, body, comment_date, post_id, parent) VALUES ($1, $2, $3, $4, $5, $6)', [id, author, body, comment_date, post_id, root], (error, result) => {
            if (error) {
                res.send(error);
            }

            res.status(200).send('Success');
        });
    }
}