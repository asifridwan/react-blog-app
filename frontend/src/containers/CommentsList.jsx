import { useEffect, useState } from 'react';
import axios from 'axios';

import CommentCard from '../components/CommentCard';

export default function CommentsList({postID, sendCommentID, sendReplyID}) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:4000/comments/${postID}`).then(response => setComments(response.data));
  }, [postID]);

  const rootComments = comments.filter(comment => comment.parent === null);

  const displayComments = rootComments.map((comment) => {
    return <CommentCard key={comment.id} info={comment} sendID={SendID} sendingReplyToParent={SendingReplyToParent} />
  });

  function SendID(id) {
    sendCommentID(id);
  }

  function SendingReplyToParent(id) {
    sendReplyID(id);
  }

  return (
    <div className='comment-section'>
      {comments.length > 0 && displayComments}
    </div>
  )
}