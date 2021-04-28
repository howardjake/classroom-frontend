import Notice from './Notice.js';

function Notices({ notices, handleDelete, handleUpdate }) {
    return (
      <div>
        {notices.map(notice => 
          <Notice 
            key={notice.id} 
            notice={notice}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
        )}
      </div>
    );
}

export default Notices;