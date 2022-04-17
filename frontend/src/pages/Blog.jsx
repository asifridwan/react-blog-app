import { useNavigate, useParams } from 'react-router-dom';

export default function Blog() {
  const navigate = useNavigate();
  const { id } = useParams();

  function BackToHome() {
    navigate('/');
  }

  return (
    <section className='blog-view'>
      <div className='blog-contents'>
        <div>
          <button className='back-button' onClick={BackToHome}><i className='fa fa-arrow-circle-left'></i> Back To Home</button>
        </div>
        <div className='blog-date'>Posted on : 17 April 2022</div>
        <div className='blog-title'>Blog Title : {id}</div>
        <p className='blog-post'>Blog Post Contents : Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quaerat nesciunt provident dolore 
        facilis soluta porro amet, corporis nobis voluptas aperiam quod atque, possimus officia facere, blanditiis ipsam veniam sunt.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nam perspiciatis, reiciendis ex porro quas blanditiis consectetur sint officiis illo 
        sapiente soluta! Maxime doloremque possimus inventore consectetur nesciunt officiis magnam!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus quibusdam sunt dolorum iure obcaecati unde officia eos ea. Sunt rerum 
        placeat atque in odio consectetur dolor neque voluptatum iure impedit.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, sapiente facere adipisci odio ipsam dolore magnam architecto laborum modi quis 
        quod temporibus ullam quia reprehenderit fugit voluptas officia sequi quas.
        </p>
        <form className='comment-form'>
          <label className='form-title'>Add a Comment</label>
          <input className='user-name' type='text' placeholder='Name' />
          <textarea className='user-comment' placeholder='Comment'></textarea>
          <div>
            <button className='submit-comment' type='submit'>Submit</button>
          </div>
        </form>
      </div>
    </section>
  )
}