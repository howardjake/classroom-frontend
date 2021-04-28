import { useState, useEffect } from 'react';
import Aside from './components/Aside';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Nav from './components/Nav';

import { 
  fetchNotices, 
  createNotice, 
  deleteNotice, 
  updateNotice } from './services/api-service';

function App() {
  const [noticesState, setNoticesState] = useState({ notices: []});

  useEffect(() => {
    async function getNotices() {
      const notices = await fetchNotices();
      setNoticesState({ notices });
    }
    getNotices();
  }, []);

  async function handleAdd(formInputs) {
    try {
      const notices = await createNotice(formInputs);
      setNoticesState({ notices });
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDelete(noticeId) {
    try {
      const notices = await deleteNotice(noticeId);
      setNoticesState({ notices });
    } catch (error) {
      console.log(error);
    }
  }

  async function handleUpdate(formInputs) {
    try {
      const notices = await updateNotice(formInputs);
      setNoticesState({ notices });
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="App">
      <div className="container">
        <Header />
        <Aside handleAdd={handleAdd} />
        <Main 
          notices={noticesState.notices}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate} 
        />
        <Nav />
        <Footer />
      </div>
    </div>
  )
}

export default App