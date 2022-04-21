import CommentCard from '../components/CommentCard';

export default function CommentsList() {
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
    }
  ];

  const rootComments = comments.filter(comment => comment.parent === null);

  const displayComments = rootComments.map((comment, i) => {
    return <CommentCard key={i} givenWidth={100} info={comment} />
  });

  return (
    <div className='comment-section'>
      {displayComments}
    </div>
  )
}