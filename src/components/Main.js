import Assignments from "./Assignments.js";
import Welcome from "./Welcome.js";

function Main({ assignments, handleDelete, handleUpdate }) {
	return (
		<main>
			<h1>Main Page Where We Want A Table Imported</h1>
			<Welcome />
			<Assignments
				assignments={assignments}
				handleDelete={handleDelete}
				handleUpdate={handleUpdate}
			/>
		</main>
	);
}

export default Main;
