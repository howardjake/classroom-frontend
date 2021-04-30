
import { Link } from "react-router-dom";

function NewAssignmentList({ assignments }) {
	return (
		<>
		{assignments.map((assignment, idx) => {
				return (
					<Link id={idx} to={`/assignments/${assignment.id}`}>
                        <div>
                            <h3>Assignment Name: {assignment.name}</h3>
                            <h4>Assignment Id: {assignment.id} </h4>
                            <p>Assignment Grade:{assignment.grade}</p>
                        <small>Assignment Due Date:{assignment.due_date}</small>

                        </div>
						
					</Link>
				);
			})}	
		</>
	);
}
export default NewAssignmentList;
