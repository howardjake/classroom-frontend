import AssignmentMasterList from "./AssignmentMasterList";

function NavMaster({ assignment_masters }) {
	return (
		<div>
			<AssignmentMasterList assignment_masters={assignment_masters} />
		</div>
	);
}

export default NavMaster;

