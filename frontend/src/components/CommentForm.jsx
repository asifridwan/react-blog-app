export default function CommentForm() {
  return (
    <form className='comment-form'>
        <label className='form-title'>Add a Comment</label>
        <input className='user-name' type='text' placeholder='Name' required />
        <textarea className='user-comment' placeholder='Comment' required></textarea>
        <div>
            <button className='submit-comment' type='submit'>Submit</button>
        </div>
    </form>
  )
}