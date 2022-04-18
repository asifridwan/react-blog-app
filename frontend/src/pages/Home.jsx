import PaginatedView from '../containers/PaginatedView';

export default function Home() {
  return (
    <section className='blog-home'>
      <div className='blog-home-wrapper'>
        <div>
          <button className='add-button'><i className='fa fa-plus-circle'></i> Add New Post</button>
        </div>
        <PaginatedView />
      </div>
    </section>
  )
}