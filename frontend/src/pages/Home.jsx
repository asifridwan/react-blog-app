import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import PaginatedView from '../containers/PaginatedView';
import AddModal from '../components/AddModal';
import { settingPosts } from '../store/posts';
import { resetDetails } from '../store/details';
import { resetComments } from '../store/comments';

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [date, setDate] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.value);

  useEffect(() => {
    axios.get('http://localhost:4000/posts').then(response => {
      dispatch(settingPosts(response.data));
    });

    dispatch(resetDetails({}));
    dispatch(resetComments([]));
  }, [dispatch, posts]);

  function ToggleModal() {
    setShowModal(!showModal);
  }

  function CloseModal() {
    setTitle('');
    setBody('');
    setDate('');
    setErrorMessage('');
    ToggleModal();
  }

  function SubmitPost() {
    axios.post('http://localhost:4000/add/post', {
      title: title,
      body: body,
      post_date: date
    }).then(response => {
      if (response.data === 'Success') {
        CloseModal();
      }
      else {
        setErrorMessage(response.data);
      }
    });
  }

  return (
    <section className='blog-home'>
      <div className='blog-home-wrapper'>
        {showModal && <AddModal 
          clickAction={ToggleModal} 
          errorMessage={errorMessage} 
          title={e => setTitle(e.target.value)} 
          body={e => setBody(e.target.value)} 
          date={e => setDate(e.target.value)} 
          submit={SubmitPost} 
          cancel={CloseModal} 
        />}
        <div>
          <button className='add-button' onClick={ToggleModal}><i className='fa fa-plus-circle'></i> Add New Post</button>
        </div>
        <PaginatedView data={posts} />
      </div>
    </section>
  )
}