
//Daniels Notice Lab

// TODO: eventually change this to heroku
const BASE_URL = 'http://localhost:3000/';  

function fetchAssignments() {
    return fetch(BASE_URL).then(res => res.json());
}

function createAssignment(data) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {
          'Content-type': 'Application/json'
        },
        body: JSON.stringify(data)
      }).then(res => res.json());
}


function deleteAssignment(id) {
    return fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE'
    }).then(res => res.json());
}


function updateAssignment({ name, grade, due_date, id }) {
    return fetch(`${BASE_URL}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'Application/json'
        },
        body: JSON.stringify({ name, grade, due_date })
      }).then(res => res.json());
}

export {
    fetchAssignments,
    createAssignment,
    deleteAssignment,
    updateAssignment
}

