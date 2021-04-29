
import { Link } from "react-router-dom";

function AssignmentMasterList({ assignment_masters }) {
	return (
		<>
		{assignment_masters.map((assignment_master, idx) => {
				return (
					<Link id={idx} to={`/assignment_masters/${assignment_masters.id}`}>
						<p>{assignment_master.name}</p>
					</Link>
				);
			})}	
		</>
	);
}
export default AssignmentMasterList;