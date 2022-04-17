import { useNavigate, useParams } from 'react-router-dom';
import BlogPost from '../components/BlogPost';
import CommentForm from '../components/CommentForm';

export default function Blog() {
  const navigate = useNavigate();
  const { id } = useParams();

  function BackToHome() {
    navigate('/');
  }

  return (
    <section className='blog-view'>
      <div className='blog-view-wrapper'>
        <div>
          <button className='back-button' onClick={BackToHome}><i className='fa fa-arrow-circle-left'></i> Back To Home</button>
        </div>
        <BlogPost id={id} />
        <CommentForm />
      </div>
    </section>
  )
}