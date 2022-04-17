export default function BlogPost({id}) {
  return (
    <div className='blog-post'>
        <div className='blog-date'>Posted on : 17 April 2022</div>
        <div className='blog-title'>Blog Title : {id}</div>
        <p className='blog-content'>Blog Post Contents : Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quaerat nesciunt provident dolore 
        facilis soluta porro amet, corporis nobis voluptas aperiam quod atque, possimus officia facere, blanditiis ipsam veniam sunt.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nam perspiciatis, reiciendis ex porro quas blanditiis consectetur sint officiis illo 
        sapiente soluta! Maxime doloremque possimus inventore consectetur nesciunt officiis magnam!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus quibusdam sunt dolorum iure obcaecati unde officia eos ea. Sunt rerum 
        placeat atque in odio consectetur dolor neque voluptatum iure impedit.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, sapiente facere adipisci odio ipsam dolore magnam architecto laborum modi quis 
        quod temporibus ullam quia reprehenderit fugit voluptas officia sequi quas.
        </p>
    </div>
  )
}