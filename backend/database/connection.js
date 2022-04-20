import pkg from 'pg';

const { Pool } = pkg;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'react_blog_app',
    password: '1508016',
    port: 5432
});

export default pool;