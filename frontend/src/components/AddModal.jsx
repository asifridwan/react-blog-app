export default function AddModal({errorMessage, title, body, date, submit, cancel}) {
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
                        <div className='error-message'><i className='fa fa-exclamation-triangle'></i> {errorMessage}</div>
                    </div>
                    <input className='post-title' type='text' placeholder='Title' onChange={title} required />
                    <textarea className='post-content' placeholder='Content' onChange={body} required></textarea>
                    <input className='post-date' type='date' onChange={date} required />
                    <div className='modal-centering'>
                        <button className='submit-post' type='submit' onClick={submit}>Submit</button>
                        <button className='cancel-post' type='reset' onClick={cancel}>Cancel</button>
                    </div>
                </form>
            </div>
        </>
    )
}