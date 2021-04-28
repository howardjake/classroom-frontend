import Assignment from './Assignment.js';

function Assignments({ assignments, handleDelete, handleUpdate }) {
    return (
      <div>
        {assignments.map(assignment => 
          <Assignment 
            key={assignment.id} 
            assignment={assignment}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
        )}
      </div>
    );
}

export default Assignments;