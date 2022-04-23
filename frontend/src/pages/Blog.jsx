import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import BlogPost from '../components/BlogPost';
import CommentForm from '../components/CommentForm';
import CommentsList from '../containers/CommentsList';

export default function Blog() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const [author, setAuthor] = useState('');
  const [commentBody, setCommentBody] = useState('');
  const [replyID, setReplyID] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:4000/details/${id}`).then(response => {
      if (response.data === 'Not Found') {
        navigate('*');
      }
      else {
        setDetails(response.data);
      }
    });
  }, [id, navigate]);

  function BackToHome() {
    navigate('/');
  }

  function SettingAuthor(e) {
    setAuthor(e.target.value);
  }

  function SettingBody(e) {
    setCommentBody(e.target.value);
  }

  function SettingReply(id) {
    setReplyID(id);
  }

  function ResetComment() {
    setAuthor('');
    setCommentBody('');
    setReplyID('');
  }

  function PostComment() {
    const comment_date = new Date().toISOString();

    axios.post('http://localhost:4000/add/comment', {
      author: author,
      body: commentBody,
      comment_date: comment_date,
      post_id: id,
      parent: replyID
    }).then(response => {
      if (response.data === 'Success') {
        ResetComment();
      }
    });
  }

  return (
    <section className='blog-view'>
      {details.length > 0 && <div className='blog-view-wrapper'>
        <div>
          <button className='back-button' onClick={BackToHome}><i className='fa fa-arrow-circle-left'></i> Back To Home</button>
        </div>
        <BlogPost date={details[0].post_date} title={details[0].title} body={details[0].body} />
        <CommentForm author={SettingAuthor} body={SettingBody} submitComment={PostComment} />
        <CommentsList postID={id} sendCommentID={SettingReply} sendReplyID={SettingReply} />
      </div>}
    </section>
  )
}