import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import CommentCard from '../components/CommentCard';
import { settingComments } from '../store/comments';

export default function CommentsList({postID, sendCommentID, sendReplyID}) {
  const dispatch = useDispatch();
  const comments = useSelector(state => state.comments.value);

  useEffect(() => {
    axios.get(`http://localhost:4000/comments/${postID}`).then(response => {
      dispatch(settingComments(response.data));
    });
  }, [dispatch, postID]);

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