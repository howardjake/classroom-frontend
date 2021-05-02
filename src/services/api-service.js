// TODO: eventually change this to heroku
const BASE_URL = "https://gradebook-backend.herokuapp.com/assignments";
const MASTERS_URL = "https://gradebook-backend.herokuapp.com/assignment_masters";
const STUDENT_URL = "https://gradebook-backend.herokuapp.com/students";
const DASHBOARD_URL = "https://gradebook-backend.herokuapp.com/dashboard";

function fetchAssignments() {
	return fetch(BASE_URL).then((res) => res.json());
}
function fetchAssignmentMasters() {
	return fetch(MASTERS_URL).then((res) => res.json());
}
function fetchStudents() {
	return fetch(STUDENT_URL).then((res) => res.json());
}
function fetchDashboard() {
	return fetch(DASHBOARD_URL).then((res) => res.json());
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

function updateAssignment({ id, grade, date_submitted, resubmit }) {
	return fetch(`${BASE_URL}/${id}`, {
		method: "PUT",
		headers: {
			"Content-type": "Application/json",
		},
		body: JSON.stringify({ grade, date_submitted, resubmit }),
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
	fetchDashboard,
	fetchStudents,
	fetchAssignmentMasters,
	updateMaster,
};
