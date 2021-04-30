import AssignmentList from "./AssignmentList";

function Aside({ assignments }) {
	return (
		<main>
			<AssignmentList assignments={assignments} />
		</main>
	);
}

export default Aside;

