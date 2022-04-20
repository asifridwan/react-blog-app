import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import BlogPost from '../components/BlogPost';
import CommentForm from '../components/CommentForm';
import AllComments from '../containers/AllComments';

export default function Blog() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [details, setDetails] = useState([]);

  function BackToHome() {
    navigate('/');
  }

  useEffect(() => {
    axios.get(`http://localhost:4000/details/${id}/`).then(response => {
      if (response.data === 'Not Found') {
        navigate('*');
      }
      else {
        setDetails(response.data);
      }
    });
  }, [id, navigate]);

  return (
    <section className='blog-view'>
      <div className='blog-view-wrapper'>
        <div>
          <button className='back-button' onClick={BackToHome}><i className='fa fa-arrow-circle-left'></i> Back To Home</button>
        </div>
        {details.length > 0 && <div>
          <BlogPost date={details[0].post_date} title={details[0].title} body={details[0].body} />
          <CommentForm />
          <AllComments />
        </div>}
      </div>
    </section>
  )
}