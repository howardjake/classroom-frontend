//import { Link } from "react-router-dom";
//import { useState } from "react";
//import MasterForm from "../components/MasterForm";

function AssignmentMasterList({
	assignment_masters,
	handleDelete,
})
 {
	//Assignment Master Edit will be reincorporated later. 

	//const [assignmentMasterListState, setAssignmentMasterListState] = useState({
	//name: name,
	//id: id,
	//description: description,
	//});

	//const [editFormVisible, setEditFormVisible] = useState(false);

	//function toggleForm() {
	//	setEditFormVisible(!editFormVisible);
	//	}

	return (
		<>
			{assignment_masters.map((assignment_master) => {
				return (
					<div className="assignmentmastersmapped">
						<p>Assignment Name: {assignment_master.name}</p>
						<p>Assignment Id: {assignment_master.id} </p>
						<p>Assignment Description: {assignment_master.description}</p>
						<p>Assignment Due Date: {assignment_master.due_date}</p>
						<button
							value={assignment_master.id}
							onClick={() => handleDelete(assignment_master.id)}
						>
							Delete Assignment For All Students
						</button>
					</div>
				);
			})}
		</>
	);
}
export default AssignmentMasterList;

/*
{editFormVisible ? (
							<td>
								<MasterForm
									editFormVisible={editFormVisible}
									toggleForm={toggleForm}
									handleUpdate={handleUpdate}
									handleMaster={handleMaster}
									description={assignment_master.description}
									name={assignment_master.name}
									id={assignment_master.id}
								/>
							</td>
						) : (
							<td>
	
								<button onClick={toggleForm}>Edit</button>
							</td>
						)}
					*/
