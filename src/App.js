import { useState, useEffect } from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./Pages/Main";
import Nav from "./components/Nav";
import { Route, Switch } from "react-router-dom";

import {
	fetchAssignments,
	createAssignment,
	deleteAssignment,
	updateAssignment,
} from "./services/api-service";
import Assignment from "./Pages/Assignment";
import Student from './Pages/Student';

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
				<Switch>
          <Route
            exact path='/'
            render={() => (
                <Main
					        
				        />
              )}
          />
          <Route 
            exact path='/assignment'
            render={() => (
              <Assignment 
              assignments={assignmentsState.assignments}
					        handleDelete={handleDelete}
					        handleUpdate={handleUpdate}/>
            )}
          />
          <Route 
            expath path ='/student/:id'
            render = {() => (
              <Student />
            )}
          />
        </Switch>
				<Footer />
			</div>
		</div>
	);
}

export default App;
