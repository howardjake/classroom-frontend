//Daniels Notice Lab

// TODO: eventually change this to heroku
const BASE_URL = "http://localhost:3000/assignments";
const MASTERS_URL = "http://localhost:3000/assignment_masters";
const STUDENT_URL = "http://localhost:3000/students";

function fetchAssignments() {
	return fetch(BASE_URL).then((res) => res.json());
}
function fetchStudents() {
	return fetch(STUDENT_URL).then((res) => res.json());
}

function createAssignment(data) {
	return fetch(MASTERS_URL, {
		method: "POST",
		headers: {
			"Content-type": "Application/json",
		},
		body: JSON.stringify(data),
	}).then((res) => res.json());
}

function deleteAssignment(id) {
	return fetch(`${MASTERS_URL}/${id}`, {
		method: "DELETE",
	}).then((res) => res.json());
}

function updateAssignment({ name, grade, due_date, id }) {
	return fetch(`${BASE_URL}/${id}`, {
		method: "PUT",
		headers: {
			"Content-type": "Application/json",
		},
		body: JSON.stringify({ name, grade, due_date }),
	}).then((res) => res.json());
}

export {
	fetchAssignments,
	createAssignment,
	deleteAssignment,
	updateAssignment,
	fetchStudents,
};
