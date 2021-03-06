export default function CommentForm({author, body, submitComment}) {
  return (
    <form className='comment-form' id='comment-reply-form'>
      <label className='form-title'>Add a Comment</label>
      <input className='user-name' type='text' placeholder='Name' onChange={author} required />
      <textarea className='user-comment' placeholder='Comment' onChange={body} required></textarea>
      <div>
        <button className='submit-comment' onClick={submitComment}>Submit</button>
      </div>
    </form>
  )
}