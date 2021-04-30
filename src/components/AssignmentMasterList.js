
import { Link } from "react-router-dom";

function AssignmentMasterList({ assignment_masters }) {
	return (
		<>
		{assignment_masters.map((assignment_master, idx) => {
				return (
					<Link id={idx} to={`/assignment_masters/${assignment_master.id}`}>
						<p>{assignment_master.name}</p>
						<p>Assignment Id: {assignment_master.id} </p>
                        <p>Description: {assignment_master.description}</p>
					</Link>
				);
			})}	
		</>
	);
}
export default AssignmentMasterList;



