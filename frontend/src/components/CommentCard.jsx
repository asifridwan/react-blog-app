import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

export default function CommentCard({info, type, sendID, sendingReplyToParent}) {
  const [replies, setReplies] = useState([]);
  const displayDate = new Date(info.comment_date).toDateString();
  const displayTime = new Date(info.comment_date).toLocaleTimeString();

  useEffect(() => {
    axios.get(`http://localhost:4000/replies/${info.id}`).then(res => setReplies(res.data));
  });

  function SendReply(id) {
    sendingReplyToParent(id);
  }

  return (
    <div className='comments-container'>
      <div className={`comment-card ${type}`}>
        <div className='comment-username'>{info.author}</div>
        <div className='comment-time'>{displayDate} at {displayTime}</div>
        <p className='comment-body'>{info.body}</p>
        <Link to='comment-reply-form' spy={true} smooth={true}><div className='reply-option' onClick={() => sendID(info.id)}>Reply</div></Link>
      </div>
      {replies.length > 0 && <div className='reply-container'>
        <div className='replies'>
          {replies.map((reply) => {
            return <CommentCard key={reply.id} info={reply} type='reply' sendID={SendReply} />
          })}
        </div>
      </div>}
    </div>
  )
}