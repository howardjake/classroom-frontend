import { useState } from 'react';
import Form from './Form';

function AssignmentMasterEdit({ assignment_masters, handleDelete, handleUpdate }) {

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
            assignment_masters={assignment_masters}
            />
          :
          <div className="assignment">
            <h3>{assignment_masters.name}</h3>
            <p>{assignment_masters.description}</p>
            <button onClick={() => handleDelete(assignment_masters.id)}>X</button>
            <button onClick={toggleForm}>Edit</button>
          </div>
        }
      </>
    );
}
export default AssignmentMasterEdit