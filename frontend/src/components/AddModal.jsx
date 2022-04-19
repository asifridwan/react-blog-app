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
                        <div className='error-message'><i className='fa fa-exclamation-triangle'></i> Required fields cannot be empty</div>
                    </div>
                    <input className='post-title' type='text' placeholder='Title' required />
                    <textarea className='post-content' placeholder='Content' required></textarea>
                    <input className='post-date' type='date' required />
                    <div className='modal-centering'>
                        <button className='submit-post' type='submit'>Submit</button>
                        <button className='cancel-post' type='reset'>Cancel</button>
                    </div>
                </form>
            </div>
        </>
    )
}