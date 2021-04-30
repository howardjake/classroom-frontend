import { Link } from "react-router-dom";

function AssignmentMasterList({ assignment_masters, handleMaster }) {
	return (
		<>
			{assignment_masters.map((assignment_master, idx) => {
				return (
					<div>
						<p>{assignment_master.name}</p>
						<p>Assignment Id: {assignment_master.id} </p>
						<p>Description: {assignment_master.description}</p>
					</div>
				);
			})}
		</>
	);
}
export default AssignmentMasterList;
