

import Notices from './Notices.js';

function Main({ notices, handleDelete, handleUpdate }) {
    return (
      <main>
          <h1>Main Page Where We Want A Table Imported</h1>
        <Notices 
          notices={notices}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      </main>
    );
}

export default Main;