import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import BlogPost from '../components/BlogPost';
import CommentForm from '../components/CommentForm';
import CommentsList from '../containers/CommentsList';
import { settingDetails } from '../store/details';

export default function Blog() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [author, setAuthor] = useState('');
  const [commentBody, setCommentBody] = useState('');
  const [replyID, setReplyID] = useState('');

  const dispatch = useDispatch();
  const details = useSelector(state => state.details.value[0]);

  useEffect(() => {
    axios.get(`http://localhost:4000/details/${id}`).then(response => {
      if (response.data === 'Not Found') {
        navigate('*');
      }
      else {
        dispatch(settingDetails(response.data));
      }
    });
  }, [id, dispatch, navigate]);

  function BackToHome() {
    navigate('/');
  }

  function SettingReply(id) {
    setReplyID(id);
  }

  function GenerateTimestampWithUTCOffset(date) {
    const tzOffset = -date.getTimezoneOffset();
    const diff = tzOffset >= 0 ? '+' : '-';
    const pad = n => `${Math.floor(Math.abs(n))}`.padStart(2, '0');
    return date.getFullYear() +
      '-' + pad(date.getMonth() + 1) +
      '-' + pad(date.getDate()) +
      'T' + pad(date.getHours()) +
      ':' + pad(date.getMinutes()) +
      ':' + pad(date.getSeconds()) +
      diff + pad(tzOffset / 60) +
      ':' + pad(tzOffset % 60);
  }

  function ResetComment() {
    setAuthor('');
    setCommentBody('');
    setReplyID('');
  }

  function PostComment() {
    const comment_date = GenerateTimestampWithUTCOffset(new Date());

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
      {details && <div className='blog-view-wrapper'>
        <div>
          <button className='back-button' onClick={BackToHome}><i className='fa fa-arrow-circle-left'></i> Back To Home</button>
        </div>
        <BlogPost date={details.post_date} title={details.title} body={details.body} />
        <CommentForm author={e => setAuthor(e.target.value)} body={e => setCommentBody(e.target.value)} submitComment={PostComment} />
        <CommentsList postID={id} sendCommentID={SettingReply} sendReplyID={SettingReply} />
      </div>}
    </section>
  )
}