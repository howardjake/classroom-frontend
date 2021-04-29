

import AssignmentEdit from './AssignmentEdit.js';

function AssignmentsList({ assignments, handleDelete, }) {
    return (
      <div>
        {assignments.map(assignment => 
          <AssignmentEdit 
            key={assignment.id} 
            assignment={assignment}
            handleDelete={handleDelete}
          />
        )}
      </div>
    );
}
//copy for assignment masters display
export default AssignmentsList;