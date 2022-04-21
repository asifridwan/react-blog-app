export default function CommentCard({info, type}) {
  const comments = [
    {
      id: 1,
      author: 'Name 1',
      body: 'Body',
      date: '2022-04-21',
      parent: null
    },
    {
      id: 2,
      author: 'Name 2',
      body: 'Body',
      date: '2022-04-21',
      parent: null
    },
    {
      id: 3,
      author: 'Name 3',
      body: 'Body',
      date: '2022-04-21',
      parent: 1
    },
    {
      id: 4,
      author: 'Name 4',
      body: 'Body',
      date: '2022-04-21',
      parent: 1
    },
    {
      id: 5,
      author: 'Name 5',
      body: 'Body',
      date: '2022-04-21',
      parent: 3
    }
  ];
  
  const replies = comments.filter(reply => reply.parent === info.id)

  return (
    <div className='comments-container'>
      <div className={`comment-card ${type}`}>
        <div className='comment-username'>{info.author}</div>
        <div className='comment-time'>Posted on : {info.date}</div>
        <p className='comment-body'>{info.body}</p>
        <div className='reply-option'>Reply</div>
      </div>
      {replies.length > 0 && <div className='reply-container'>
        <div className='replies'>
          {replies.map((reply, i) => {
            return <CommentCard key={i} info={reply} type='reply' />
          })}
        </div>
      </div>}
    </div>
  )
}