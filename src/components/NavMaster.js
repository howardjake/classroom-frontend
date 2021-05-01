import AssignmentMasterList from "./AssignmentMasterList";
import AssignmentForm from "../Pages/AssignmentForm";

function NavMaster({
	assignment_masters,
	handleMaster,
	assignments,
	handleAdd,
	handleDelete,
	handleUpdate,
}) {
	return (
		<div>
			<AssignmentMasterList
				assignment_masters={assignment_masters}
				handleMaster={handleMaster}
				handleDelete={handleDelete}
				handleUpdate={handleUpdate}
				handleAdd={handleAdd}
			/>
			<AssignmentForm
				assignments={assignments}
				handleAdd={handleAdd}
				handleDelete={handleDelete}
				handleUpdate={handleUpdate}
			/>
		</div>
	);
}

export default NavMaster;
