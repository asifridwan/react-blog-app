import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Home from '../pages/Home';
import Blog from '../pages/Blog';
import NotFound from '../pages/NotFound';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(res => setBlogs(res.data));
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home data={blogs}/>} />
        <Route path='/post/:id' element={<Blog/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;