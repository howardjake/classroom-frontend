import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./Pages/Main";
import Nav from "./components/Nav";
import Aside from "./components/AssignmentListView"
import { Route, Switch } from "react-router-dom";

import { auth } from "./services/firebase"

import {
	fetchAssignments,
	createAssignment,
	deleteAssignment,
	updateAssignment,
	fetchStudents,
} from "./services/api-service";
import Assignment from "./Pages/Assignment";
import Student from "./Pages/Student";
import StudentList from "./components/StudentList";

function App() {
	const [assignmentsState, setAssignmentsState] = useState({
		user: null, 
		assignments: [] });
	const [studentsState, setStudentsState] = useState({ students: [] });

	useEffect(() => {
		async function getAssignments() {
			const assignments = await fetchAssignments();
			setAssignmentsState({ assignments });
		}
		getAssignments();
		async function getStudents() {
			const students = await fetchStudents();
			setStudentsState({ students });
		}
		getStudents();

		const cancelSub = auth.onAuthStateChanged(user => {
			if (user) {
			  setAssignmentsState(prevState => ({
				...prevState, 
				user,
			  }));
			} else {
			  setAssignmentsState(prevState => ({
				...prevState,
				user,
			  })); 
			}
		  });
		  
		  return function() {
			cancelSub();
		  }
		
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
				<Nav students={studentsState.students} />
				

				<Switch>
					<Route
						exact
						path="/"
						render={() => (
							<Main
								
							/>
						)}
					/>
					<Route exact path="/assignment" render={() => <Aside assignments={assignmentsState.assignments} 
						handleDelete={handleDelete}
						handleUpdate={handleUpdate}
					/>	} />
					<Route expath path="/student/:id" render={() => <Student />} />
				</Switch>
				<Footer />
			
			</div>
		</div>
	);
}

export default App;
							