export default function CommentCard({id, type, user, time, body}) {
  return (
    <div className={`comment-card ${type}`}>
      <div className='comment-username'>{user}</div>
      <div className='comment-time'>Posted on : {time}</div>
      <p className='comment-body'>{body}</p>
      <div className='reply-option'>Reply</div>
    </div>
  )
}