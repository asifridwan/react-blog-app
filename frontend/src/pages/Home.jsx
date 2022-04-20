import { useState, useEffect } from 'react';
import axios from 'axios';

import PaginatedView from '../containers/PaginatedView';
/* import AddModal from '../components/AddModal'; */

export default function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/posts/').then(res => setBlogs(res.data));
  }, []);

  return (
    <section className='blog-home'>
      <div className='blog-home-wrapper'>
        {/* <AddModal /> */}
        <div>
          <button className='add-button'><i className='fa fa-plus-circle'></i> Add New Post</button>
        </div>
        <PaginatedView data={blogs} />
      </div>
    </section>
  )
}