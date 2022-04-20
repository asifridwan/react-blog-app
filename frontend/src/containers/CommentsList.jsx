import CommentCard from '../components/CommentCard';

export default function CommentsList() {
  return (
    <div className='comments-container'>
      <CommentCard id={1} user='Ador' time='2022-04-22' body='Good for you' type='parent' />
      <CommentCard id={1} user='Ador' time='2022-04-22' body='Good for you' type='reply' />
      <CommentCard id={1} user='Ador' time='2022-04-22' body='Good for you' type='reply' />
      <CommentCard id={1} user='Ador' time='2022-04-22' body='Good for you' type='parent' />
    </div>
  )
}