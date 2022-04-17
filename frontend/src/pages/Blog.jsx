import { useNavigate, useParams } from 'react-router-dom';

export default function Blog() {
  const navigate = useNavigate();
  const { id } = useParams();

  function BackToHome() {
    navigate('/');
  }

  return (
    <div className='blog-view'>
      <span onClick={BackToHome}>Back to home</span>
      <div>Blog Post ID : {id}</div>
    </div>
  )
}