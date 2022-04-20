import { useState, useEffect } from 'react';
import axios from 'axios';

import PaginatedView from '../containers/PaginatedView';
import AddModal from '../components/AddModal';

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [date, setDate] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:4000/posts').then(res => setBlogs(res.data));
  }, [showModal]);

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

  function SettingTitle(e) {
    setTitle(e.target.value);
  }

  function SettingBody(e) {
    setBody(e.target.value);
  }

  function SettingDate(e) {
    setDate(e.target.value);
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
        {showModal && <AddModal clickAction={ToggleModal} errorMessage={errorMessage} title={SettingTitle} body={SettingBody} date={SettingDate} submit={SubmitPost} cancel={CloseModal} />}
        <div>
          <button className='add-button' onClick={ToggleModal}><i className='fa fa-plus-circle'></i> Add New Post</button>
        </div>
        <PaginatedView data={blogs} />
      </div>
    </section>
  )
}