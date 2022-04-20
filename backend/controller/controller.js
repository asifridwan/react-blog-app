import pool from '../database/connection.js';
import { v1 as uuidv1, v4 as uuidv4 } from 'uuid';

export const getAllPosts = (req, res) => {
    pool.query('SELECT id, title, post_date FROM posts', (error, result) => {
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