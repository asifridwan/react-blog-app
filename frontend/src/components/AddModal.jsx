export default function AddModal() {
  return (
    <>
        <div className='overlay-style' />
        <div className='modal-container'>
            <form className='modal-form'>
                <div className='modal-centering'>
                    <label className='modal-heading'>
                        <i className='fa fa-plus-square'></i> Add a New Post
                    </label>
                </div>
                <div className='modal-centering'>
                    <div className='error-message'><i className='fa fa-exclamation-triangle'></i> Error Message</div>
                </div>
                <input className='post-title' type='text' placeholder='Title' />
                <textarea className='post-content' placeholder='Content'></textarea>
                <input className='post-date' type='date' />
                <div className='modal-centering'>
                    <button className='submit-post' type='submit'>Submit</button>
                    <button className='cancel-post' type='reset'>Cancel</button>
                </div>
            </form>
        </div>
    </>
  )
}