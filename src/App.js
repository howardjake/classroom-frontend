import { useState, useEffect } from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./Pages/Main";
import Nav from "./components/Nav";
import NavMaster from './components/NavMaster.js'
//import AssignmentListView from "./components/AssignmentListView"
import NewAssignmentListView from "./components/NewAssignmentListView"
import { Route, Switch } from "react-router-dom";

import {
	fetchAssignments,
	createAssignment,
	//deleteAssignment,
	//updateAssignment,
	fetchStudents,
	fetchAssignmentMasters
} from "./services/api-service";
import AssignmentForm from "./Pages/AssignmentForm";
import Student from "./Pages/Student";

function App() {
const [assignmentsState, setAssignmentsState] = useState({ assignments: [] });
const [studentsState, setStudentsState] = useState({ students: [] });
const [assignment_mastersState, setAssignment_MastersState] = useState({ assignment_masters: [] });

	useEffect(() => {
		async function getAssignments() {
			const assignments = await fetchAssignments();
			setAssignmentsState({ assignments });
		}
		getAssignments();

		async function getAssignment_Masters() {
			const assignment_masters = await fetchAssignmentMasters();
			setAssignment_MastersState({ assignment_masters });
		}
		getAssignment_Masters();

		getAssignments();
		async function getStudents() {
			const students = await fetchStudents();
			setStudentsState({ students });
		}
		getStudents();
		
	}, []);

	async function handleAdd(formInputs) {
		console.log(formInputs)
		try {
			const assignments = await createAssignment(formInputs);
			setAssignmentsState({ assignments });
		} catch (error) {
			console.log(error);
		}
	}
	/*
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
	*/


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
					<Route exact path="/assignments" render={() => <NewAssignmentListView assignments={assignmentsState.assignments}
					/>	} />

					<Route exact path="/assignment_masters" render={() => <AssignmentForm 
					assignments={assignmentsState.assignments}
					handleAdd={handleAdd}
					 />	} />

					<Route expath path="/student/:id" render={() => <Student />} />
				</Switch>
				<NavMaster assignment_masters={assignment_mastersState.assignment_masters} />
				<Footer />
			</div>
		</div>
	);
}

export default App;