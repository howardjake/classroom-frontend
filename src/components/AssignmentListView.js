import AssignmentList from "./AssignmentList";

function Aside({ assignments }) {
	return (
		<nav>
			<AssignmentList assignments={assignments} />
		</nav>
	);
}

export default Aside;

