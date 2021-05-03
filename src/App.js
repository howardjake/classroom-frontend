import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import NavMaster from "./components/NavMaster.js";
import { Route, Switch } from "react-router-dom";
import Student from "./Pages/Student";
import { auth } from "./services/firebase";

import {
	createAssignmentMasters,
	deleteAssignmentMasters,
	fetchAssignments,
	fetchAssignmentMasters,
	fetchStudents,
	fetchDashboard,
	updateAssignment,
	updateMaster,
} from "./services/api-service";
import Dashboard from "./components/Dashboard";
import Welcome from "./components/Welcome";

function App() {
	const [assignmentsState, setAssignmentsState] = useState({
		user: null,
		assignments: [],
	});
	const [studentsState, setStudentsState] = useState({ students: [] });
	const [assignment_mastersState, setAssignment_MastersState] = useState({
		assignment_masters: [],
	});
	const [dashboardState, setDashboardState] = useState({ dashboard: {} });

	useEffect(() => {
		async function getAssignments() {
			const assignments = await fetchAssignments();
			setAssignmentsState((prevState) => ({
				...prevState,
				assignments,
			}));
		}
		getAssignments();

		async function getAssignment_Masters() {
			const assignment_masters = await fetchAssignmentMasters();
			setAssignment_MastersState({ assignment_masters });
		}
		getAssignment_Masters();

		async function getStudents() {
			const students = await fetchStudents();
			setStudentsState({ students });
		}
		getStudents();

		async function getDashboard() {
			const dashboard = await fetchDashboard();
			setDashboardState({ dashboard });
		}
		getDashboard();

		const cancelSub = auth.onAuthStateChanged((user) => {
			if (user) {
				setAssignmentsState((prevState) => ({
					...prevState,
					user,
				}));
			} else {
				setAssignmentsState((prevState) => ({
					...prevState,
					user,
				}));
			}
		});

		return function () {
			cancelSub();
		};
	}, []);

	async function handleAdd(formInputs) {
		console.log(formInputs);
		try {
			const assignment_masters = await createAssignmentMasters(formInputs);
			setAssignment_MastersState({ assignment_masters });
			async function getAssignments() {
				const assignments = await fetchAssignments();
				setAssignmentsState((prevState) => ({
					...prevState,
					assignments,
				}));
			}
			getAssignments();
		} catch (error) {
			console.log(error);
		}
	}

	async function handleDelete(formInputs) {
		try {
			const assignment_masters = await deleteAssignmentMasters(formInputs);
			setAssignment_MastersState({ assignment_masters });
			async function getAssignments() {
				const assignments = await fetchAssignments();
				setAssignmentsState((prevState) => ({
					...prevState,
					assignments,
				}));
			}
			getAssignments();
		} catch (error) {
			console.log(error);
		}
	}

	async function handleUpdate(formInputs) {
		console.log(formInputs);
		try {
			const assignments = await updateAssignment(formInputs);
			setAssignmentsState((prevState) => ({
				...prevState,
				assignments,
			}));
			async function getAssignments() {
				const assignments = await fetchAssignments();
				setAssignmentsState((prevState) => ({
					...prevState,
					assignments,
				}));
			}
			getAssignments();
		} catch (error) {
			console.log(error);
		}
	}
	async function handleMaster(formInputs) {
		try {
			const assignment_masters = await updateMaster(formInputs);
			setAssignment_MastersState({ assignment_masters });
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div className="App">
			<div className="container">
				<Header user={assignmentsState.user} />
				<Switch>
					{assignmentsState.user ? (
						<>
							<Nav students={studentsState.students} />
							<Route
								exact
								path="/assignments"
								render={() => (
									<NavMaster
										assignment_masters={
											assignment_mastersState.assignment_masters
										}
										handleMaster={handleMaster}
										assignments={assignmentsState.assignments}
										handleAdd={handleAdd}
										handleDelete={handleDelete}
										handleUpdate={handleUpdate}
									/>
								)}
							/>

							<Route
								path="/student/:id"
								render={() => (
									<Student
										students={studentsState.students}
										assignments={assignmentsState.assignments}
										handleUpdate={handleUpdate}
									/>
								)}
							/>
							<Route
								exact
								path="/"
								render={() => (
									<Dashboard
										dashboardState={dashboardState.dashboard}
										user={assignmentsState.user}
									/>
								)}
							/>
						<Footer />
						</>
					) : (
						<Route
							exact
							path="/"
							render={() => <Welcome user={assignmentsState.user} />}
						/>
					)}
				</Switch>

			</div>
		</div>
	);
}

export default App;
