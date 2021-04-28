import { useState } from 'react';
import Form from './Form';

function Notice({ notice, handleDelete, handleUpdate }) {

    const [editFormVisible, setEditFormVisible] = useState(false);

    function toggleForm() {
      setEditFormVisible(!editFormVisible);
    }

    return (
      <>
        {
          editFormVisible ?
          <Form 
            editFormVisible={editFormVisible}
            toggleForm={toggleForm}
            handleUpdate={handleUpdate} 
            notice={notice}
            />
          :
          <div className="notice">
            <h3>{notice.title}</h3>
            <p>{notice.author}</p>
            <small>{notice.phone}</small>
            <button onClick={() => handleDelete(notice.id)}>X</button>
            <button onClick={toggleForm}>Edit</button>
          </div>
        }
      </>
    );
}

export default Notice;