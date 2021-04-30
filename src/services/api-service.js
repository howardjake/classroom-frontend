//Daniels Notice Lab

// TODO: eventually change this to heroku
const BASE_URL = "http://localhost:3000/assignments";
const MASTERS_URL = "http://localhost:3000/assignment_masters";
const STUDENT_URL = "http://localhost:3000/students";

function fetchAssignments() {
	return fetch(BASE_URL).then((res) => res.json());
}
function fetchAssignmentMasters() {
	return fetch(MASTERS_URL).then((res) => res.json());
}
function fetchStudents() {
	return fetch(STUDENT_URL).then((res) => res.json());
}

function createAssignmentMasters(data) {
	return fetch(MASTERS_URL, {
		method: "POST",
		headers: {
			"Content-type": "Application/json",
		},
		body: JSON.stringify(data),
	}).then((res) => res.json());
}

function deleteAssignmentMasters(id) {
	return fetch(`${MASTERS_URL}/${id}`, {
		method: "DELETE",
	}).then((res) => res.json());
}

function updateAssignment({ id, grade }) {
	return fetch(`${BASE_URL}/${id}`, {
		method: "PUT",
		headers: {
			"Content-type": "Application/json",
		},
		body: JSON.stringify({ grade }),
	}).then((res) => res.json());
}
function updateMaster({ id, name, description, dueDate }) {
	return fetch(`${MASTERS_URL}/${id}`, {
		method: "PUT",
		headers: {
			"Content-type": "Application/json",
		},
		body: JSON.stringify({ name, id, description, dueDate }),
	}).then((res) => res.json());
}

export {
	fetchAssignments,
	createAssignmentMasters,
	deleteAssignmentMasters,
	updateAssignment,
	fetchStudents,
	fetchAssignmentMasters,
	updateMaster,
};
