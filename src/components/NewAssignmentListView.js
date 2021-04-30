import NewAssignmentList from "./NewAssignmentList";
//old aside function
function NewAssignmentListView({ assignments }) {
	return (
		<main>
			<NewAssignmentList assignments={assignments} />
		</main>
	);
}

export default NewAssignmentListView;