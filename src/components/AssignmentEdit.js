//Old (Assignment.js)
import { useState } from 'react';
import Form from './Form';

function AssignmentEdit({ assignment, handleDelete, handleUpdate }) {

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
            assignment={assignment}
            />
          :
          <div className="assignment">
            <h3>{assignment.name}</h3>
            <p>{assignment.grade}</p>
            <small>{assignment.due_date}</small>
            <button onClick={() => handleDelete(assignment.id)}>X</button>
            <button onClick={toggleForm}>Edit</button>
          </div>
        }
      </>
    );
}

export default AssignmentEdit;