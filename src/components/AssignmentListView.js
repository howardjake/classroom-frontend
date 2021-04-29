import AssignmentList from "./AssignmentList";
//old aside function
function AssignmentListView({ assignments }) {
	return (
		<main>
			<AssignmentList assignments={assignments} />
		</main>
	);
}

export default AssignmentListView;