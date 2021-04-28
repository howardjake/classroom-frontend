import { useState, useEffect } from "react";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";

import {
	fetchAssignments,
	createAssignment,
	deleteAssignment,
	updateAssignment,
} from "./services/api-service";

function App() {
	const [assignmentsState, setAssignmentsState] = useState({ assignments: [] });

	useEffect(() => {
		async function getAssignments() {
			const assignments = await fetchAssignments();
			setAssignmentsState({ assignments });
		}
		getAssignments();
	}, []);

	async function handleAdd(formInputs) {
		try {
			const assignments = await createAssignment(formInputs);
			setAssignmentsState({ assignments });
		} catch (error) {
			console.log(error);
		}
	}

	async function handleDelete(assignmentId) {
		try {
			const assignments = await deleteAssignment(assignmentId);
			setAssignmentsState({ assignments });
		} catch (error) {
			console.log(error);
		}
	}

	async function handleUpdate(formInputs) {
		try {
			const assignments = await updateAssignment(formInputs);
			setAssignmentsState({ assignments });
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div className="App">
			<div className="container">
				<Header />
				<Nav />
				<Aside handleAdd={handleAdd} />
				<Main
					assignments={assignmentsState.assignments}
					handleDelete={handleDelete}
					handleUpdate={handleUpdate}
				/>
				<Footer />
			</div>
		</div>
	);
}

export default App;
