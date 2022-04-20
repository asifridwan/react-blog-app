import { Link } from 'react-router-dom';

export default function BlogDemo({id, title, date}) {
  const linkStyling = { color: 'inherit', textDecoration: 'inherit'};
  const standardDate = date.split('T')[0];

  return (
    <div className='blog-demo'>
      <div className='blog-demo-title'>
        <Link style={linkStyling} to={`/post/${id}`}>{title}</Link>
      </div>
      <div className='blog-demo-date'>Posted on : {standardDate}</div>
    </div>
  )
}