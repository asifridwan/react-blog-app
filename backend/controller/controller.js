import { v1 as uuidv1, v4 as uuidv4 } from 'uuid';
import pkg from 'pg';

const { Pool } = pkg;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'react_blog_app',
    password: '1508016',
    port: 5432
});

export const getAllPosts = (req, res) => {
    pool.query('SELECT * FROM posts', (error, result) => {
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

        res.status(200).send(result.rows);
    });
}

export const addNewPost = (req, res) => {
    const id = uuidv1();
    const {title, body, post_date} = req.body;
}