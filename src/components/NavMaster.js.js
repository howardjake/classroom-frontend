import AssignmentMasterList from "./AssignmentMasterList";

function NavMaster({ assignment_masters }) {
	return (
		<nav>
			<AssignmentMasterList assignment_masters={assignment_masters} />
		</nav>
	);
}

export default NavMaster;

