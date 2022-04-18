import BlogDemo from '../components/BlogDemo';

export default function PaginatedView({data}) {
  return (
    <div>
      <div className='paginated-view-container'>
        {data.length > 0 && data.map((item, i) => {
          return <BlogDemo key={i} title={item.title} date={item.userId} />
        })}
      </div>
    </div>
  )
}