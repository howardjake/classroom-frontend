// TODO: eventually change this to heroku
const BASE_URL = 'http://localhost:3000/notices'; 
//swao notices to assignments

function fetchNotices() {
    return fetch(BASE_URL).then(res => res.json());
}

function createNotice(data) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {
          'Content-type': 'Application/json'
        },
        body: JSON.stringify(data)
      }).then(res => res.json());
}


function deleteNotice(id) {
    return fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE'
    }).then(res => res.json());
}


function updateNotice({ title, author, phone, id }) {
    return fetch(`${BASE_URL}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'Application/json'
        },
        body: JSON.stringify({ title, author, phone })
      }).then(res => res.json());
}

export {
    fetchNotices,
    createNotice,
    deleteNotice,
    updateNotice
}