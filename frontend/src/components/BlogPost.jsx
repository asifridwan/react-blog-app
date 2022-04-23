export default function BlogPost({date, title, body}) {

  return (
    <div className='blog-post'>
      <div className='blog-date'>Posted on : {date}</div>
      <div className='blog-title'>{title}</div>
      <p className='blog-content'>{body}</p>
    </div>
  )
}