export default function BlogDemo({title, date}) {
  return (
    <div className='blog-demo'>
        <div className='blog-demo-title'>{title}</div>
        <div className='blog-demo-date'>{date}</div>
    </div>
  )
}