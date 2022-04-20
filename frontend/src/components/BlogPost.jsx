export default function BlogPost({date, title, body}) {
  const standardDate = date.split('T')[0];

  return (
    <div className='blog-post'>
      <div className='blog-date'>Posted on : {standardDate}</div>
      <div className='blog-title'>{title}</div>
      <p className='blog-content'>{body}</p>
    </div>
  )
}